function polarToCartesian(x: number, y: number, r: number, degrees: number) {
  const radians = (degrees * Math.PI) / 180.0;
  return [x + r * Math.cos(radians), y + r * Math.sin(radians)];
}

function getSegmentPath(
  {
    size,
    margin = 0.1,
    segments,
    radius = size / 2,
    width = 1,
  }: {
    size: number;
    margin?: number;
    segments: number;
    radius?: number;
    width?: number;
  },
  segment: number,
  span = 1,
) {
  const center = size / 2;
  const degrees = 360 / segments;
  const shift = margin === 0 ? -90 : -90 + (degrees * margin) / 2;
  const start = shift + degrees * segment;
  const end =
    shift + degrees * (segment + span - margin) + (margin == 0 ? 1 : 0);
  const innerRadius = radius - width;

  const arc = Math.abs(start - end) > 180 ? 1 : 0;
  const point = (rad: number, deg: number) =>
    polarToCartesian(center, center, rad, deg)
      .map((n) => n.toPrecision(5))
      .join(',');

  return [
    `M${point(radius, start)}`,
    `A${radius},${radius},0,${arc},1,${point(radius, end)}`,
    `L${point(radius - width, end)}`,
    `A${innerRadius},${innerRadius},0,${arc},0,${point(innerRadius, start)}`,
    'Z',
  ].join('');
}

const colors = {
  YELLOW: 'text-team-yellow',
  BLUE: 'text-team-blue',
  RED: 'text-team-red',
  UNKNOWN: 'text-team-unknown',
};

function TeamCircle({size, width = 2}: {size: number; width?: number}) {
  let options = {size, width, margin: 0.05, segments: 3};

  // The relative size of the "current team" compared to the other teams. A 3
  // means that the current team is rendered 3 times as large as the other teams.
  const teamSpan = 3;
  options = {...options, segments: 2 + 2 * teamSpan};

  return (
    <svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
      <path
        d={getSegmentPath(options, 0, teamSpan)}
        className={colors['BLUE']}
        fill="currentColor"
      />
      <path
        d={getSegmentPath(options, teamSpan)}
        className={colors['YELLOW']}
        fill="currentColor"
      />
      <path
        d={getSegmentPath(options, teamSpan + 1, teamSpan)}
        className={colors['BLUE']}
        fill="currentColor"
      />
      <path
        d={getSegmentPath(options, options.segments - 1)}
        className={colors['RED']}
        fill="currentColor"
      />
    </svg>
  );
}

export {TeamCircle};
