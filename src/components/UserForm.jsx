import React from 'react'

import styles from './UserForm.module.css'

function UserForm() {
  return (
    <div className={styles.form_content}>
        <div className={styles.form_control}>
            <label htmlFor="name">Nome:</label>
            <input 
                type="text" 
                name="name" 
                id="name"
                placeholder="Digite seu nome" 
            />
            <label htmlFor="name">Email:</label>
            <input 
                type="email" 
                name="email" 
                id="email"
                placeholder="Digite seu email" 
            />
        </div>
    </div>
  )
}

export default UserForm