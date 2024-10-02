import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, Flex } from "antd";

type ModalType = {
  icon?: React.ReactNode;
  title: React.ReactNode;
  content: React.ReactNode;
  loading?: boolean;
  callback: () => void;
};

export const useModal = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [modalConfig, setModalConfig] = useState<ModalType | null>(null);

  const showModal = useCallback(
    ({ icon, title, content, loading, callback }: ModalType) => {
      setModalConfig({ icon, title, content, loading, callback });
      setIsVisible(true);
    },
    []
  );

  const handleOk = useCallback(() => {
    if (modalConfig?.callback) {
      modalConfig.callback();
    }
    setIsVisible(false);
  }, [modalConfig]);

  const handleCancel = useCallback(() => {
    setIsVisible(false);
  }, []);

  const renderModal = (
    <Modal
      className="custom-modal"
      open={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      maskClosable
      centered
      okText={t("CORE:confirm")}
      okButtonProps={{
        autoFocus: true,
        loading: modalConfig?.loading,
      }}
      cancelText={t("CORE:cancel")}
      title={
        <Flex align="center" gap={6}>
          {modalConfig?.icon}
          {modalConfig?.title}
        </Flex>
      }
    >
      {modalConfig?.content}
    </Modal>
  );

  return { showModal, renderModal };
};
