import React, { Component } from 'react'
import { DefaultRenderer, Actions } from 'react-native-router-flux'
import Drawer from 'react-native-drawer'

import SideMenu from './SideMenu'

export default class DrawerComponent extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const state = this.props.navigationState;
    const children = state.children;
    return (
      <Drawer
        ref="navigation"
        open={state.open}
        onOpen={()=>Actions.refresh({key:state.key, open: true})}
        onClose={()=>Actions.refresh({key:state.key, open: false})}
        type="displace"
        content={<SideMenu />}
        styles={drawerStyles}
        tapToClose={true}
        openDrawerOffset={0.4}
        panCloseMask={0.4}
        negotiatePan={true}
        tweenHandler={(ratio) => ({
          main: { opacity:Math.max(0.74,1-ratio) }
        })}>
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    )
  }
}

const drawerStyles = {
  drawer: {
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 3
  },
  main: {
    paddingLeft: 0
  },
}
