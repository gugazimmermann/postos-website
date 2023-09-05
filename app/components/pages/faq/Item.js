import { FaqClose, FaqOpen } from '../../icons';

const Item = ({ question, setQuestion, item }) => {
  return (
    <>
      <div>
        <button
          onClick={() => (question !== item.id ? setQuestion(item.id) : setQuestion())}
          className='flex items-center focus:outline-none'
        >
          {question && question === item.id ? <FaqOpen /> : <FaqClose />}
          <h1 className='mx-4 text-lg text-slate-800 text-left'>{item.question}</h1>
        </button>
        {question && question === item.id && (
          <div className='flex mt-4 md:mx-10'>
            <span className='border border-amber-500' />
            <p className='px-4 text-slate-600'>{item.text} </p>
          </div>
        )}
      </div>
      <hr className='my-4 border-slate-200' />
    </>
  );
};

export default Item;
