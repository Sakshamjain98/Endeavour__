import  { useState } from 'react';
import './style.scss'; // Import the CSS file with styles

const MailComponent = () => {
  const [attachmentImage, setAttachmentImage] = useState('');
  const [attachmentExtension, setAttachmentExtension] = useState('');
  const [isAttachmentVisible, setIsAttachmentVisible] = useState(false);
  const [isRemoveButtonVisible, setIsRemoveButtonVisible] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setAttachmentImage(event.target.result);
      setIsAttachmentVisible(true);
      setIsRemoveButtonVisible(true);
    };

    if (file.type.startsWith('image/') || file.type === 'application/pdf') {
      setAttachmentExtension('');
      reader.readAsDataURL(file);
    } else {
      setAttachmentImage('');
      setAttachmentExtension(`.${file.name.split('.').pop().toUpperCase()}`);
    }
  };

  const handleRemoveAttachment = () => {
    setAttachmentImage('');
    setAttachmentExtension('');
    setIsAttachmentVisible(false);
    setIsRemoveButtonVisible(false);
  };

  const handleDragEnter = () => {
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = () => {
    setIsDragOver(false);
  };

  return (
    <div className="mail-wrapper h-[60vh] mt-24 my-12 w-full flex justify-center items-center">
      <form className="mail h-[100%] ">
        <h1 className="mail-title">Send a mail:</h1>
        <input className="mail-field " type="email" placeholder="Email" />
        <input className="mail-field" type="text" placeholder="Subject" />
        <div className="mail-content-section">
          <textarea className="mail-field content" rows="4" placeholder="Body"></textarea>
          <div
            className={`mail-attachment-container ${isDragOver ? 'drag-over' : ''}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="mail-attachment-label-container">
              <svg className="mail-attachment-label-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.438 11.662l-9.19 9.19a6.003 6.003 0 11-8.49-8.49l9.19-9.19a4.002 4.002 0 015.66 5.66l-9.2 9.19a2.001 2.001 0 11-2.83-2.83l8.49-8.48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <label htmlFor="file">Add attachment</label>
            </div>
            <div className={`mail-attachment-wrapper ${isAttachmentVisible ? '' : 'hidden'}`}>
              <div className="mail-attachment">
                {attachmentImage && <img className="mail-attachment-image" src={attachmentImage} alt="" />}
                {attachmentExtension && <p className="mail-attachment-extension">{attachmentExtension}</p>}
              </div>
            </div>
            <input className="mail-attachment-input" id="file" type="file" onChange={handleAttachmentChange} />
            <button className={`mail-attachment-remove-button ${isRemoveButtonVisible ? '' : 'hidden'}`} type="button" onClick={handleRemoveAttachment}>
              <svg className="mail-attachment-remove-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
              </svg>
            </button>
          </div>
        </div>
        <footer className="mail-footer">
          <p className="mail-signature text-lg">— Nicolas Jesenberger</p>
          <button className="mail-button w-24 h-10 bg-blue-500 text-white " type="submit" onClick={(e) => e.preventDefault()}>Send mail</button>
        </footer>
      </form>
      <img className={`mail-paperclip front ${isAttachmentVisible ? '' : 'hidden'}`} src="https://assets.codepen.io/4175254/paperclip-front.png" alt="" />
      <img className={`mail-paperclip back ${isAttachmentVisible ? '' : 'hidden'}`} src="https://assets.codepen.io/4175254/paperclip-back.png" alt="" />
    </div>
  );
};

export default MailComponent;
