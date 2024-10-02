import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const WrapperRouteComponent = ({
  titleId,
  children,
}: WrapperRouteComponentType) => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(titleId)}</title>
      </Helmet>
      {children}
    </>
  );
};

export default WrapperRouteComponent;
