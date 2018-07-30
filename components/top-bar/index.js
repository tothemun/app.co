import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Headroom from 'react-headroom'
import Link from 'next/link'

import { StyledTopBar } from '@components/top-bar/styled'
import { AppIcon } from '@components/logos'
import { SearchBar } from '@components/search'
import GetUpdatesModal from '@containers/modals/get-updates'

// import { selectIsLoading } from '@stores/router/selectors'
import NewsletterActions from '@stores/newsletter/actions'

const NavigationComponent = (props) => (
  <StyledTopBar.Navigation mobile>
    <Link href="/learn-more" prefetch>
      <a href="/learn-more">Learn more</a>
    </Link>
    <a href="#" onClick={(evt) => {
        console.log(props, NewsletterActions)
        evt.preventDefault()
        props.openNewsletterModal()
      }}
    >
      Get Updates
    </a>
    <Link href="/submit">
      <a href="/submit">Submit your dapp</a>
    </Link>
  </StyledTopBar.Navigation>
)

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, NewsletterActions), dispatch)
}

const Navigation = connect(() => ({}), mapDispatchToProps)(NavigationComponent)

class TopBar extends React.Component {
  render() {
    return (
      <Headroom>
        <StyledTopBar>
          <StyledTopBar.Wrapper wrap>
            <StyledTopBar.Section grow>
              <Link href="/" prefetch>
                <a href="/">
                  <AppIcon />
                </a>
              </Link>
              <SearchBar transparent />
            </StyledTopBar.Section>
            <StyledTopBar.Section>
              {/* <MenuIcon color="currentColor" size={24} /> */}
              <Navigation />
            </StyledTopBar.Section>
          </StyledTopBar.Wrapper>
        </StyledTopBar>
        <GetUpdatesModal />
      </Headroom>
    )
  }
}
export { TopBar }
