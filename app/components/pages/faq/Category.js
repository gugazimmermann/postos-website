const Content = ({ category, changeCategory, items }) => {
  return (
    <div className='mx-12'>
      <div className='space-y-4'>
        {items.map((x) => (
          <button
            key={x.id}
            className={`block hover:underline hover:cursor-pointer ${
              category === x.id ? 'font-bold text-amber-500 underline' : 'text-slate-500'
            }`}
            onClick={() => changeCategory(x.id)}
          >
            {x.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Content;
