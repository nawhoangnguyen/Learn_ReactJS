import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";






function Paragraph() {

    const context = useContext(ThemeContext) //add thêm cái useState useContext để nhận được thằng provider ThemeContext bên app.js gửi qua ko cần trung gian
    
    return(
        <p className={context.theme}>
            Context provides a way to pass data through the component tree without having to pass props down manually at every level
        </p>

    )
}
export default Paragraph