import "./navbar.css";
export const Form = (props) => {
    const{onSubmit,children,title} = props;

    return (
        <form onSubmit={onSubmit}>
            <h3>{title}</h3>
            {children}
            <div>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    )
}