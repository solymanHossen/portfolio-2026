import { CaseStudySection } from "./case-study-section"
import { TodoChip, TodoOrText } from "./todo-chip"
import { StatCallout } from "./stat-callout"
import { TechStackGrid } from "./tech-stack-grid"
import type { CaseStudy } from "@/types/project"

export function CaseStudyBody({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="container-prose">
      <CaseStudySection title="Context">
        <p>{caseStudy.context}</p>
      </CaseStudySection>

      <CaseStudySection title="Business Problem">
        <p>{caseStudy.problem}</p>
      </CaseStudySection>

      <CaseStudySection title="My Role">
        <p>{caseStudy.myRole}</p>
      </CaseStudySection>

      <CaseStudySection title="Constraints">
        <TodoOrText value={caseStudy.constraints} />
      </CaseStudySection>

      <CaseStudySection title="System Architecture">
        {caseStudy.architecture.kind === "value" ? (
          <>
            <p>{caseStudy.architecture.value.description}</p>
            {caseStudy.architecture.value.diagram ? null : <TodoChip note="Architecture diagram coming soon" />}
          </>
        ) : (
          <TodoChip note={caseStudy.architecture.note} />
        )}
      </CaseStudySection>

      <CaseStudySection title="Technology Decisions">
        <ul className="list-disc space-y-2 pl-5">
          {caseStudy.technologyDecisions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Technology Stack">
        <TechStackGrid items={caseStudy.techStack} />
      </CaseStudySection>

      <CaseStudySection title="Frontend Implementation">
        <p>{caseStudy.frontendImplementation}</p>
      </CaseStudySection>

      <CaseStudySection title="Backend & API Architecture">
        <p>{caseStudy.backendAndApi}</p>
      </CaseStudySection>

      <CaseStudySection title="Database Considerations">
        <TodoOrText value={caseStudy.databaseConsiderations} />
      </CaseStudySection>

      <CaseStudySection title="Authentication & RBAC">
        <TodoOrText value={caseStudy.authAndRbac} />
      </CaseStudySection>

      <CaseStudySection title="Performance Work">
        {caseStudy.performanceWork.kind === "value" ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {caseStudy.performanceWork.value.map((stat) => (
              <StatCallout key={stat.metric} metric={stat.metric} value={stat.value} />
            ))}
          </div>
        ) : (
          <TodoChip note={caseStudy.performanceWork.note} />
        )}
      </CaseStudySection>

      <CaseStudySection title="Key Engineering Challenges">
        <ul className="list-disc space-y-2 pl-5">
          {caseStudy.keyChallenges.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Solution">
        <p>{caseStudy.solution}</p>
      </CaseStudySection>

      <CaseStudySection title="Outcome">
        <ul className="list-disc space-y-2 pl-5">
          {caseStudy.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Screenshots">
        {caseStudy.screenshots.kind === "value" ? (
          <div className="grid grid-cols-2 gap-3">
            {caseStudy.screenshots.value.map((shot) => (
              <div key={shot.src} className="overflow-hidden rounded-lg border">
                {/* eslint-disable-next-line @next/next/no-img-element -- decorative placeholder area, replaced once real screenshots exist */}
                <img src={shot.src} alt={shot.alt} className="w-full object-cover" />
              </div>
            ))}
          </div>
        ) : (
          <TodoChip note="No verified screenshots available yet" />
        )}
      </CaseStudySection>

      <CaseStudySection title="Lessons Learned">
        <TodoOrText value={caseStudy.lessonsLearned} />
      </CaseStudySection>

      <CaseStudySection title="Future Improvements">
        <TodoOrText value={caseStudy.futureImprovements} />
      </CaseStudySection>
    </div>
  )
}
