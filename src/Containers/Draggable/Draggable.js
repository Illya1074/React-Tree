import './Draggable.css';
import {useState, useEffect} from 'react'

function Draggable({onStop, isDragging, children}) {

  const [postState, setPostState] = useState(false) 
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [deltaPos, setDeltaPos] = useState({
    x: null,
    y: null,
  })

  const updateMousePosition = ev => {
    setMousePosition({ x: ev.pageX, y: ev.pageY });
    
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [postState]);

  useEffect(() => {
    window.addEventListener("mouseup",onMouseUp);
    return () => window.removeEventListener("mouseup", onMouseUp);
  }, [postState]);
  
  

  const onMouseDown = (e) => {
    setPostState(true)
    isDragging(true)
    e.preventDefault();
    setDeltaPos({
      x: e.pageX,
      y: e.pageY
    })
    
  }

  const onMouseUp = (e) => {
    if(postState){

      onStop()
      isDragging(false)
      
      setPostState(false)
    }
  }

  
  return (
    // <div onMouseMove={postState ? onMouseMove : onMouseMove} onMouseUp={onMouseUp} className={postState ? 'wrap' : 'wrap'}>
  <span  onMouseDown={onMouseDown} onMouseUp={onMouseUp}
   style={{transition:'0.05s', transform:  postState ? 'translate('+(mousePosition.x-deltaPos.x-13)+'px,'+(mousePosition.y-deltaPos.y-13)+'px'+')'
    : null}}  className={postState ? 'element active' : 'element'}>{children}</span>       
    // </div>
  );
}

export default Draggable;
