import {Modal} from "antd";
import {useEffect, useState} from "react";

const Notice = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    useEffect(() => {
        setModalIsOpen(true);
    }, []);
    return (
        <div>
            <Modal
                title="Han Guide: Updated at (05/30/2023)"
                open={modalIsOpen}
                onOk={() => setModalIsOpen(false)}
                onCancel={() => setModalIsOpen(false)}
                style={{fontFamily: 'Arial, sans-serif', top: 20}}
                okText={"OK"}
            >
                <h2 style={{color: '#333', marginBottom: '15px'}}>Hello, đừng quên tham gia Reguide để ủng hộ ứng dụng</h2>
                <p style={{
                    color: '#666',
                    marginBottom: '10px'
                }}>
                Mục đích ban đầu của việc phát triển công cụ này là giúp mọi người xem thông tin ví của họ dễ dàng hơn. Nó luôn tuân thủ nguyên tắc nguồn mở và miễn phí. Tôi hy vọng bạn thích nó.</p>
                
                
                <p>Telegram: <a href={"https://t.me/ReguideWiki"}>https://t.me/ReguideWiki</a></p>
                
            </Modal>
        </div>
    )
}
export default Notice;
