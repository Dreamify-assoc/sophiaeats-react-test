type PanelItemProps = {
    size: 'large'
    title: string
    subtitle: string
    keyColor: string
    imgSrc: string
}

export function Panel({size, title, subtitle, keyColor, imgSrc}: PanelItemProps) {
    console.log(title)
    return (
        <>
            <div className={`panel`}
                 style={{
                    backdropFilter: 'blur(30px)',
                     scrollSnapAlign: 'start',
                     minWidth: '210px',
                     height: '210px',
                     borderRadius: '30px',
                     //backgroundImage: `url(${imgSrc})`,
                     //background: keyColor+'ff',
                     backgroundSize: 'cover',
                      background: `linear-gradient(0deg,${keyColor}FF 20%, ${keyColor}DD 60%,${keyColor}77 100%),  url(${imgSrc})`,
                     border: 'none 1px #666',
                     boxShadow: '0px 0px 5px rgba(0,0,0,0.3)',
                     display: 'inline-block',
                     position: 'relative'
                 }}>
                <div className={`panelText`} style={{
                    position: 'absolute',
                    bottom: 0,
                    padding: '0px 0 20px 30px'
                }}>

                    <p style={{
                        margin: 0,
                        color: '#fff',
                        fontWeight: '400',
                        position: 'relative',
                        top: '10px'
                    }}>{subtitle}</p>
                    <p style={{
                        margin: 0,
                        fontSize: '2em',
                        fontWeight: 'bold',
                        color: '#fff',
                    }}>{title}</p>
                </div>
            </div>
        </>
    )
}