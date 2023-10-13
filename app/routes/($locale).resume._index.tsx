import Resume from '~/components/Resume';
import Section from '~/package/keepsimple-ui/components/layout/Section/Section';

function ResumeIndex() {
  return (
    <main>
      <Section>
        <Section.Content>
          <Resume />
        </Section.Content>
      </Section>
    </main>
  );
}

export default ResumeIndex;
