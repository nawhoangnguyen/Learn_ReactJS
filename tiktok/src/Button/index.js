import clsx from 'clsx'
import styles from './Button.module.scss'


// classnames
// clsx
function Button ({primary, disabled}){
    
    const classes = clsx(styles.btn, {
        [styles.primary]: primary //Nêu primary là true thì mới có cái style đo
        ,'d-flex': true       ,
        [styles.disabled]: disabled
})

    return (

        <>
        <button className={classes}> Button 1!! </button>




        {/* Truyen 1 cai object xu li vao ibject
        <button className={clsx(styles.btn, {
            [styles.active]: true 
            // Lấy từ biến thì ngoặc vuông => 0 phải array
            })}>
                Button 2!! 
                </button> */}

        </>
    )
}
export default Button