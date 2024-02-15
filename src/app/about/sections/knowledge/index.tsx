'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { TbTools } from 'react-icons/tb'
import { ClosedCaptioning } from '@phosphor-icons/react/dist/ssr'

import { knowledgeCategories } from './knowledge-categories'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  KnowledgeInfo
} from './accordion'

export function Knowledge() {
  return (
    <div>
      <Accordion.Root
        className="z-0 w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200/30 dark:border-neutral-950 dark:bg-neutral-950/30"
        type="single"
        collapsible
      >
        <AccordionItem value="Skill captions">
          <AccordionTrigger>
            <span className="flex items-center gap-3">
              <ClosedCaptioning size="1em" />
              <span>Skill captions</span>
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div className="flex items-center gap-6">
                <KnowledgeInfo
                  knowledge={{
                    title: 'Skill',
                    color: '#fff',
                    status: 'good',
                    icon: TbTools
                  }}
                />
                <span className="text-lg">
                  Skills I am good at, or at least comfortable enough to build
                  projects with.
                </span>
              </div>
              <div className="flex items-center gap-6">
                <KnowledgeInfo
                  knowledge={{
                    title: 'Skill',
                    color: '#fff',
                    status: 'learning',
                    icon: TbTools
                  }}
                />
                <span className="text-lg">
                  Skills I am in the early stages of learning.
                </span>
              </div>
              <div className="flex items-center gap-6">
                <KnowledgeInfo
                  knowledge={{
                    title: 'Skill',
                    color: '#fff',
                    status: 'rusty',
                    icon: TbTools
                  }}
                />
                <span className="text-lg">
                  Skills that {"I've"} studied, but {"didn't"} delve deep into.
                  I would need to review learning materials to build something
                  using the skill.
                </span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        {knowledgeCategories.map(category => {
          const learningSkills = category.knowledgeList.filter(
            skill => skill.status === 'learning'
          )
          const goodSkills = category.knowledgeList.filter(
            skill => skill.status === 'good'
          )
          const rustySkills = category.knowledgeList.filter(
            skill => skill.status === 'rusty'
          )

          return (
            <AccordionItem key={category.title} value={category.title}>
              <AccordionTrigger>{category.title}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-3">
                  {[...learningSkills, ...goodSkills, ...rustySkills].map(
                    knowledge => (
                      <KnowledgeInfo
                        knowledge={knowledge}
                        key={knowledge.title}
                      />
                    )
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion.Root>
    </div>
  )
}
