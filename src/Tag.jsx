const Tag = ({ bgcolor, width, height, icon, textcolor, text }) => {

    return (
        <>
            <div className={`flex ${bgcolor} rounded-full justify-between gap-[6px] px-[16px] py-[4px] items-center`}>
                <img className={`${width} ${height}`} src={`${icon}`} />
                <p className={`text-base font-normal ${textcolor}`}>{text}</p>
            </div >
        </>
    )
}

export default Tag
