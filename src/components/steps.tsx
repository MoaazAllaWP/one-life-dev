export const StepCom = (_props: any) => {
    const { priText, secText, highlighted } = _props;

    return <div className={highlighted? "StepCom highlighted":"StepCom"}>
        <h3 className="pri LB24">{priText}</h3>
        <h3 className="sec LT24">{secText}</h3>
    </div>
}