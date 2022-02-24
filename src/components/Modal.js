import './Modal.css'
export default function Modal({children}) {
  return (
    <div className="Modal-backdrop">
    <div className="Modal">
    {children}
    <button>Close</button>
    </div>
        </div>
  )
}
