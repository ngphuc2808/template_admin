export const RenderIf = ({ content, isTrue }: RenderIfType) => {
  return isTrue ? content : null;
};

export const RenderIfMulti = ({
  trueContent,
  falseContent,
  isTrue,
}: RenderIfMultiType) => {
  return isTrue ? trueContent : falseContent;
};
