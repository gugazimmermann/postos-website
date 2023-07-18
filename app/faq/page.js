'use client';

import { useEffect, useState } from 'react';
import { Section, SectionTitle } from '../components/layout/sections';
import { Category, Item } from '../components/pages/faq';
import { faq } from '../utils';

export default function FAQ() {
  const [category, setCategory] = useState();
  const [question, setQuestion] = useState();

  const changeCategory = (id) => {
    setCategory(id);
    setQuestion();
  };

  useEffect(() => {
    setCategory(1);
  }, []);

  return (
    <Section>
      <SectionTitle title='Perguntas Frequentes' />
      <div className='mt-8 xl:mt-16 md:flex'>
        <Category category={category} changeCategory={changeCategory} items={faq} />
        <div className='flex-1 mt-8 md:mt-0'>
          {category &&
            (faq.find((f) => f.id === category)?.items || []).map((x) => (
              <Item key={x.id} question={question} setQuestion={setQuestion} item={x} />
            ))}
        </div>
      </div>
    </Section>
  );
}
