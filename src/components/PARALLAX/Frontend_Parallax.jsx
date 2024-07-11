import { useScroll, useTransform, motion } from 'framer-motion';
import Picture1 from '../../assets/Images/img1.jpg'
import Picture2 from '../../assets/Images/img1.jpg'
import Picture3 from '../../assets/Images/img1.jpg'

import "./frontend_parallax.css";
import { useRef } from 'react';

export default function Frontend_Parallax() {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })
 

  return (
    <div className="overflow-hidden parallax">
      <div ref={container} className='flex flex-col gap-3'>
        <div className="tab1 shadow-inner">
        <Slide src={Picture1} direction={'left'} left={"-40%"} progress={scrollYProgress}/>
        </div>
        <div className="tab2 shadow-2xl">
        <Slide src={Picture2} direction={'right'} left={"-25%"} progress={scrollYProgress}/>
        </div>
        
        
      </div>
      <div className='h-[100vh]' />
    </div>
  );
}

const Slide = (props) => {
  const direction = props.direction == 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  return (
    <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap ">
      <Phrase text={"UI-UX Design"} src={props.src}/>
      <Phrase text={"Full Stack Developer"} src={props.src}/>
      <Phrase text={"Front End Developer"} src={props.src}/>
      <Phrase text={"UI-UX Design"} src={props.src}/>
      <Phrase text={"Full Stack Developer"} src={props.src}/>
      <Phrase text={"Front End Developer"} src={props.src}/>
    </motion.div>
  )
}

const Phrase = ({src, text}) => {

  return (
    <div className={'px-5 flex gap-4 items-center'}>
      <p className='text-[3vw]  font-normal font-inconsolata tracking-tighter'>{text}</p>
      <span className="relative h-[3vw] aspect-[4/2] rounded-full overflow-hidden">
        <img style={{objectFit: "cover"}} src={src} alt="image" fill/>
      </span>
    </div>
  )
}