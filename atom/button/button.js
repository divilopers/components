import styles from './button.module.css';
export default function Button(props) {
  const defaultButtonClass = 'button-component';
  return (
    <button
    onClick={() => {
          props.onClick()
      }
    }
    className={
      [styles[defaultButtonClass],
      styles[props.buttonType],
      (props.className || '')].join(' ')
    } type={props.type}>{props.text}</button>
  )
}