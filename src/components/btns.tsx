import "../assets/scss/components/btns.scss";
export const PriBtn = (props: { value: string; click: Function; }) => {
    const { value, click } = props;
    return <button className="btn-pri LT20" onClick={
        () => click()
    }>
        {value}
    </button>
}, SecBtn = (props: { value: string; click: Function; }) => {
    const { value, click } = props;
    return <button className="btn-sec LT20" onClick={
        () => click()
    }>
        {value}
    </button>
}, IcoBtn = (props: { click: Function; img: any }) => {
    const { img, click } = props;
    return <button className="btn-ico LT20" onClick={
        () => click()
    }>
        {img}
    </button>
}