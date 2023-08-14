import type {ReactNode} from 'react';

const Text: React.FC<{text: ReactNode}> = ({text}) => {
  return (
    <div className="pagebody  text component">
      <div className="component-content">
        <div className="pagebody-copy">{text}</div>
      </div>
    </div>
  );
};

export default Text;
