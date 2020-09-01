import * as React from 'react';

const CustomTextInput = React.forwardRef<
  HTMLInputElement,
  {
    onClick: () => void;
  }
>((props, ref) => {
  React.useEffect(() => {
    console.log('[Child] props:', props);
    console.log('[Child] ref:', ref);
  }, []);

  return (
    <div>
      <input type='text' ref={ref} />
      <input
        type='button'
        value='Focus the text input'
        onClick={props.onClick}
      />
    </div>
  );
});

export const AutoFocusTextInputFunction: React.FC = () => {
  const textInput = React.useRef<HTMLInputElement>(null);
  const handleFocus = React.useCallback(() => {
    textInput.current.focus();
  }, []);

  React.useEffect(() => {
    handleFocus();
    console.log('[Parent] textInput ref:', textInput.current);
  }, []);

  return <CustomTextInput ref={textInput} onClick={handleFocus} />;
};
