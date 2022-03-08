import React from 'react'
import { Header } from '../Header'
import { Hero } from './Hero'
import { Support } from './Support'
import { Testimonials } from './Testimonials'
import { Features } from './Features'
import { HowItWorks, type CodeSnippets } from './HowItWorks'
import { Playground } from './Playground'

export const LandingPage: React.FC<{ codeSnippetsHtml: CodeSnippets; usedByCount: number }> = ({
  codeSnippetsHtml,
  usedByCount,
}) => {
  return (
    <div>
      <Header />
      <div className="h-full pt-[57px]">
        <Hero />
        <Support />
        <Testimonials usedByCount={usedByCount} />
        <Features />
        <HowItWorks codeSnippetsHtml={codeSnippetsHtml} />
        <hr className="my-64" />
        <div className="max-w-xl" style={{ fontSize: 13 }}>
          <div dangerouslySetInnerHTML={{ __html: codeSnippetsHtml[0].content }} />
          <div dangerouslySetInnerHTML={{ __html: codeSnippetsHtml[1].content }} />
        </div>
        <Playground />
      </div>
    </div>
  )
}
