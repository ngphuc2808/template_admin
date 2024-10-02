import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, Flex } from "antd";

type ModalFormType = {
  icon?: React.ReactNode;
  title: React.ReactNode;
  content: React.ReactNode;
  loading?: boolean;
  modalRender?: (node: React.ReactNode) => React.ReactNode;
  callback: () => void;
};

export const useModalForm = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [modalConfig, setModalConfig] = useState<ModalFormType | null>(null);

  const showModalForm = useCallback(
    ({
      icon,
      title,
      content,
      loading,
      modalRender,
      callback,
    }: ModalFormType) => {
      setModalConfig({ icon, title, content, loading, modalRender, callback });
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

  const renderModalForm = (
    <Modal
      className="custom-modal"
      open={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      maskClosable
      centered
      destroyOnClose
      okText={t("CORE:confirm")}
      okButtonProps={{
        autoFocus: true,
        htmlType: "submit",
        loading: modalConfig?.loading,
      }}
      cancelText={t("CORE:cancel")}
      title={
        <Flex align="center" gap={6}>
          {modalConfig?.icon}
          {modalConfig?.title}
        </Flex>
      }
      modalRender={modalConfig?.modalRender}
    >
      {modalConfig?.content}
    </Modal>
  );

  return { showModalForm, renderModalForm };
};
