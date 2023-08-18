import { useCallback, useEffect, useRef } from 'react';
import DrawerItems from './DrawerItems';

const Drawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const drawerRef = useRef(null);

  const handleClickOutside = useCallback(
    (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) setIsDrawerOpen(false);
    },
    [setIsDrawerOpen],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div
      ref={drawerRef}
      className={`fixed top-0 left-0 w-64 bg-amber-50 h-full transform ${
        isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform ease-in-out duration-300 shadow-2xl z-50 md:hidden`}
    >
      <div className='py-8 px-4 flex flex-col gap-4'>
        <DrawerItems setIsDrawerOpen={setIsDrawerOpen} />
      </div>
    </div>
  );
};

export default Drawer;
