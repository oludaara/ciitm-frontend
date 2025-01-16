import {
  useEffect,
  useState,
} from 'react';

import { useSelector } from 'react-redux';
import useAbout from '../../hooks/useAbout.js';

const History = () => {
  const [history, sethistory] =
    useState({});
  const [Vision, setVision] = useState(
    {},
  );

  let aboutPage = useSelector(
    state => state.about.aboutPage,
  );

  useAbout();

  useEffect(() => {
    if (aboutPage) {
      let history = aboutPage.History;
      let vision =
        aboutPage.Vision_and_Mission;

      setVision({ ...vision });

      sethistory({ ...history });
    }
  }, [aboutPage]);

  return (
    <section className='w-full px-10 max-[599px]:px-6 py-20 max-[599px]:py-4 flex items-center justify-center max-[599px]:gap-10 font-[Montserrat] max-[599px]:flex-col'>
      <div className='left w-1/2 max-[599px]:w-full h-full flex items-start justify-between gap-3 flex-col'>
        <h1 className='text-[1.7vw] font-semibold text-[#333] max-[599px]:text-[4.5vw]'>
          History
        </h1>

        <p className='history_Para_One text-[0.9vw] max-[599px]:text-[3vw] font-[Poppins] text-[#333]'>
          {!history.paragraph_First
            ? 'Not Found Paragraph One'
            : history.paragraph_First}
        </p>

        <p className=' history_Para_Two text-[0.9vw] max-[599px]:text-[3vw] font-[Poppins] text-[#333]'>
          {!history.paragraph_Second
            ? 'Not Found Paragraph Two'
            : history.paragraph_Second}
        </p>

        <p className='history_Para_Three text-[0.9vw] max-[599px]:text-[3vw] font-[Poppins] text-[#333]'>
          {!history.paragraph_Third
            ? 'Not Found Paragraph Three'
            : history.paragraph_Third}
        </p>

        <p className='history_Para_Four text-[0.9vw] max-[599px]:text-[3vw] font-[Poppins] text-[#333]'>
          {!history.paragraph_Four
            ? 'Not Found Paragraph Four'
            : history.paragraph_Four}
        </p>
      </div>

      <div className='right w-1/2 max-[599px]:w-full h-full flex items-start justify-between gap-3 flex-col'>
        <h1 className='text-[1.7vw] font-semibold text-[#333] max-[599px]:text-[4.5vw]'>
          {!Vision.title
            ? 'Vision Title Not Found'
            : Vision.title}
        </h1>

        <p className='vision_Para_First text-[0.9vw] max-[599px]:text-[3vw] font-[Poppins] text-[#333]'>
          {!Vision.paragraph_First
            ? 'Vision Para fist Not Found'
            : Vision.paragraph_First}
        </p>

        <p className='vision_Para_Second text-[0.9vw] max-[599px]:text-[3vw] font-[Poppins] text-[#333]'>
          {!Vision.paragraph_Second
            ? 'Vision Para Second Not Found'
            : Vision.paragraph_Second}
        </p>

        <p className='vision_Para_Third text-[0.9vw] max-[599px]:text-[3vw] font-[Poppins] text-[#333]'>
          {!Vision.paragraph_Third
            ? 'Vision Paragraph Third Not Found'
            : Vision.paragraph_Third}
        </p>

        <p className='vision_Para_Four text-[0.9vw] max-[599px]:text-[3vw] font-[Poppins] text-[#333]'>
          {!Vision.paragraph_Four
            ? 'Vision Paragraph Four Not Found'
            : Vision.paragraph_Four}
        </p>
      </div>
    </section>
  );
};

export default History;
