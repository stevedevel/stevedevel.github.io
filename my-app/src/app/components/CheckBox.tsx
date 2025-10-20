export const CheckBox = (
    { title, cb, id, checked }: { title: string, cb: (e: React.ChangeEvent<HTMLInputElement>) => void, id: string, checked: boolean }
  ) => {
  
    return (
      <label key={id} className="marginLR">
        <input type="checkbox" key={id} onChange={cb} checked={checked} />
        &nbsp;{title}
      </label>
    )
  }