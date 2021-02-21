import { useEffect, useRef } from "react";
import './preview.css';

interface PreviewProps {
  code: string;
}

const html = `
<html>
  <head>
    <style>html {background-color: white;}</style>
  </head>
  <body>
    <div id="root"></div>
    <script>
      window.addEventListener('message', (event) =>{
        try{
          eval(event.data);
        } catch (err) {
          const root = document.querySelector('#root');
          root.innerHTML = '<div style="color: red;">' + err + '</div>'
        }
      }, false)
    </script>
  </body>
</html>
`;

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    // wait untail the html being refreshed
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code])
  return (
    <div className="preview-wrapper">
      <iframe
        ref={iframe}
        title='code-preview'
        sandbox='allow-scripts'
        srcDoc={html}
      />
    </div>
  )
}

export default Preview;