import { useCallback, useState } from "react";


type EntryProps = {
  text: string
}

function Entry(props: EntryProps) {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <div className="checkbox-container" style={{display: "flex"}}>
        <input type="checkbox" id="strikethrough" value={checked+""} onChange={() => setChecked(!checked)}/>
        <label id="textLabel" style={{textDecorationLine: checked === true?"line-through":"", color: "white"}}>{props.text}</label>
      </div>
      
    </>
  )
}

export default Entry;