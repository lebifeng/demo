export const myDialogStyle = `
  .my-dialog {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    padding: 12px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-size: 14px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    font-size: 16px;
  }

  .content {
    max-height: 240px;
    margin: 12px 0;
  }

  .footer {
    display: flex;
    align-items: center;
    height: 40px;
    gap: 12px;
    box-sizing: border-box;
  }

  .footer-btn {
    flex: 1 1 auto;
    width: 0;
    height: 100%;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
  }

  .footer-btn.ok {
    background-color: #00a0e9;
  }

  .footer-btn.cancel {
    background-color: #f00;
  }
`;
