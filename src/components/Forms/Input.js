import React from 'react'
import styles from './Input.module.css'

const types = {
  email: {
    regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: "Preencha um email válido."
  },
}

const Input = ({label, type, name, value, setValue}) => {
  const [erro, setErro] = React.useState(null)

  function onChange({target}) {
    setValue(target.value)
    if (erro) validate()
  }

  function validate() {
    if (value.length === 0) {
      setErro('Preencha um valor.')
      return 
    } else if (types[type] && !types[type].regex.test(value)) {
      setErro(types[type].message)
      return 
    } else {
      setErro(null)
      return 
    }
  }

  function onBlur() {
    validate()
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input className={styles.input} type={type} id={name} name={name} value={value} onChange={onChange} onBlur={onBlur}/>
      {erro && <p className={styles.error}>{erro}</p>}
    </div>
  )
}

export default Input
