import React, {createContext, useState} from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  style?: React.CSSProperties;
  mode?: MenuMode;
  onSelect?: (selectIndex: number) => void;
  children?: React.ReactNode
}

export interface IMenuContext {
  index: number;
  onSelect?: (selectedIndex: number) => void;
}

export const MenuContext = createContext<IMenuContext>({index: 0})

const Menu: React.FC<MenuProps> = (props) => {
  const {defaultIndex, className, style, mode, onSelect, children} = props
  const [currentActive, setActive] = useState(defaultIndex)

  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical'
  })

  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  }

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu