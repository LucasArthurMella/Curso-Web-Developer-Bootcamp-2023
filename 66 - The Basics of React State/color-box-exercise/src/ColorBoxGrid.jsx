import ColorBox from "./ColorBox";


export default function ColorBoxGrid({ colorList }) {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
            </div>
            <div className="d-flex justify-content-center">
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
            </div>
            <div className="d-flex justify-content-center">
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
            </div>
            <div className="d-flex justify-content-center">
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
            </div>
            <div className="d-flex justify-content-center">
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
                <ColorBox colors={colorList} />
            </div>
        </div>
    )
}