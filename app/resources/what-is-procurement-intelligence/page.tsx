import Link from "next/link";
import { Section } from "../../../components/site/Section";
import { SchemaScript } from "../../../components/site/SchemaScript";
import {
  ArticleActionPanel,
  ArticleBriefGrid,
  ArticleFaq,
  ArticleInsightPanel,
  ArticleTakeaways,
  ArticleToc,
} from "../../../components/site/ArticleBriefBlocks";
import { RelatedArticles } from "../../../components/site/RelatedArticles";
import { RelatedSolution } from "../../../components/site/RelatedSolution";
import { buildArticleMetadata, buildArticleSchema, buildFaqSchema } from "../../../lib/seo";

export const dynamic = "force-static";

const pagePath = "/resources/what-is-procurement-intelligence";
const publishedAt = "2026-03-14T00:00:00+00:00";

export const metadata = buildArticleMetadata({
  title: "What Is Procurement Intelligence?",
  description:
    "In public-sector markets, opportunity timing determines preparation quality. Procurement intelligence focuses on identifying where demand is likely to...",
  path: pagePath,
  datePublished: publishedAt,
});

const articleFaqs = [
  {
    question: "What is procurement intelligence?",
    answer:
      "Procurement intelligence is the structured analysis of procurement records, contract lifecycles, buyer behavior, market participation, and external signals so teams can plan before formal tender notices appear.",
  },
  {
    question: "How is procurement intelligence different from tender alerts?",
    answer:
      "Tender alerts notify teams after an opportunity is published. Procurement intelligence adds an earlier evidence layer by reading cycles, renewals, buyer patterns, and signals that shape future demand.",
  },
  {
    question: "How does Civant use procurement intelligence?",
    answer:
      "Civant connects buyer history, awards, lifecycle signals, competitor movement, and public external signals into forecasting intelligence that helps teams prioritize accounts and prepare earlier.",
  },
];

const articleSchema = [
  ...buildArticleSchema({
  title: "What Is Procurement Intelligence?",
  description:
    "In public-sector markets, opportunity timing determines preparation quality. Procurement intelligence focuses on identifying where demand is likely to...",
  path: pagePath,
  datePublished: publishedAt,
  }),
  buildFaqSchema(articleFaqs),
];

export default function ArticlePage() {
  return (
    <>
      <Section className="hero-block hero-section">
        <p className="eyebrow">Resources</p>
        <h1 className="headline-xl">What Is Procurement Intelligence?</h1>
        <p className="article-byline">
          By <a href="https://www.linkedin.com/in/davidmanriquecivant/" target="_blank" rel="noopener noreferrer">David Manrique</a> | March 2026
        </p>
      </Section>

      <Section muted>
        <div className="article-prose">
          <p className="article-body-text">
            In public-sector markets, opportunity timing determines preparation
 quality. Procurement intelligence focuses on identifying where
 demand is likely to emerge before tender publication, so teams can
 prioritize accounts, align partnerships, and allocate resources
 earlier.
          </p>

          <p className="article-body-text">
            This is not guesswork. It is evidence-based analysis of buying
patterns, contract windows, and participation dynamics over time.
          </p>

          <ArticleBriefGrid>
            <ArticleTakeaways
              items={[
                {
                  label: "Timing",
                  text: "The commercial advantage comes from recognizing demand before the notice compresses the buying window.",
                },
                {
                  label: "Evidence",
                  text: "Useful intelligence is built from procurement records, lifecycles, participation behavior, and verified signals.",
                },
                {
                  label: "Action",
                  text: "The output should shape account focus, partner choices, and bid/no-bid preparation.",
                },
              ]}
            />
            <ArticleToc
              items={[
                { label: "Intelligence defined", href: "#intelligence-defined" },
                { label: "Cycle-based thinking", href: "#cycle-based-thinking" },
                { label: "Evidence-based planning", href: "#evidence-based-planning" },
              ]}
            />
          </ArticleBriefGrid>

          <ArticleInsightPanel
            eyebrow="Civant View"
            title="Procurement intelligence is a preparation system, not a notice feed."
          >
            <p>
              The strongest teams are not simply faster at finding published
              tenders. They are better at understanding which buyers, categories,
              contracts, and market movements deserve attention before the
              market becomes crowded.
            </p>
          </ArticleInsightPanel>

          <h2 id="intelligence-defined" className="article-subheading">
            Intelligence Defined
          </h2>

          <p className="article-body-text">
            Traditional tender monitoring platforms are useful for tracking
 published opportunities. Their limitation is timing: they are
 strongest after publication, when planning windows are already
 compressed and engagement options are narrower.
          </p>

          <p className="article-body-text">
            Procurement intelligence adds a pre-publication layer. Instead of
 only surfacing new notices, it helps teams understand cycle
 behavior and emerging opportunity signals before formal release.
          </p>

          <h2 id="cycle-based-thinking" className="article-subheading">
            Cycle-Based Thinking
          </h2>

          <p className="article-body-text">
            Public-sector buying is cyclical. Institutions buy, renew, and
 retender through repeatable patterns influenced by contract
 structures, category norms, and internal planning rhythms.
          </p>

          <p className="article-body-text">
            Teams that understand cycle patterns can prepare earlier and make
 better prioritization decisions. Teams relying only on publication
 alerts often react too late.
          </p>

          <h2 id="evidence-based-planning" className="article-subheading">
            Evidence-Based Planning
          </h2>

          <p className="article-body-text">
            Civant is built as a procurement intelligence platform centered on
 procurement-cycle analysis. It combines historical procurement
 records, contract lifecycle signals, and market participation data
 into actionable workflows for enterprise teams.
          </p>

          <p className="article-body-text">
            Explore how Civant modules work on the{" "}
            <Link href="/platform" className="text-link">
              Platform page
            </Link>{" "}
            and review the analytical foundation on the{" "}
            <Link href="/methodology" className="text-link">
              Methodology page
            </Link>
            .
          </p>

          <ArticleActionPanel
            eyebrow="Next Step"
            title="Turn procurement intelligence into a working account routine."
            body="Use Civant to connect procurement cycles, lifecycle signals, buyer behavior, and competitor context into earlier, better-qualified opportunities."
            primaryHref="/platform"
            primaryLabel="Explore Platform"
            secondaryHref="/contact"
            secondaryLabel="Talk To Civant"
          />

          <ArticleFaq items={articleFaqs} />

          <RelatedSolution
            solutionSlug="procurement-intelligence-software"
            linkLabel="Explore procurement intelligence software"
          >
            See how Civant turns procurement cycles, awards, lifecycle signals,
            and market participation data into a working intelligence layer.
          </RelatedSolution>

          <RelatedArticles currentPath={pagePath} />
          <div className="button-row" style={{ marginTop: "3rem" }}>
            <Link href="/resources" className="btn btn-secondary">
              Back to Resources
            </Link>
            <Link href="/pricing" className="btn btn-primary">
              View Pricing
            </Link>
          </div>
        </div>
      </Section>
      <SchemaScript data={articleSchema} />
    </>
  );
}
