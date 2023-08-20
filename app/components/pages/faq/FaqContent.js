'use client';

import { useEffect, useState } from 'react';
import { Category, Item } from '.';
import { faq } from '../../../utils';

const FaqContent = () => {
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
    <div className='mt-8 xl:mt-16 md:flex'>
      <Category category={category} changeCategory={changeCategory} items={faq} />
      <div className='flex-1 mt-8 md:mt-0'>
        {category &&
          (faq.find((f) => f.id === category)?.items || []).map((x) => (
            <Item key={x.id} question={question} setQuestion={setQuestion} item={x} />
          ))}
      </div>
    </div>
  );
}

export default FaqContent;
