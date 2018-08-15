import * as React from 'react'
import { MiningList } from '@components/mining/list'
import { Section, Heading, SubHeading } from '@pages/mining/shared'
import { Type } from '@components/typography'
import { Flex, Box } from '@components/mining'
import { MiningButton } from '@components/mining/button'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import { AppIcon } from '@components/app-icon'

const ListItemText = (props) => <Type.h4 color="white" fontSize="18px" lineHeight={1.5} fontWeight={400} {...props} />

const apps = [
  {
    name: 'Sovereign',
    earnings: {
      usd: '$15,000',
      btc: 1.2
    },
    tags: ['Blockstack Auth', 'Gaia'],
    appIcon: 'https://i.imgur.com/xFn761F.png'
  },
  {
    name: 'Graphite Docs',
    earnings: {
      usd: '$12,500',
      btc: 1.2
    },
    tags: ['Blockstack Auth', 'Gaia'],
    appIcon: 'https://browser.blockstack.org/images/app-icon-graphite-256x256.png'
  },
  {
    name: 'Stealthy',
    earnings: {
      usd: '$11,120',
      btc: 1.2
    },
    tags: ['Blockstack Auth', 'Gaia'],
    appIcon: 'https://browser.blockstack.org/images/app-icon-stealthy-256x256.png'
  },

  {
    name: 'Misthos',
    earnings: {
      usd: '$10,800',
      btc: 1.2
    },
    tags: ['Blockstack Auth', 'Gaia'],
    appIcon: 'https://browser.blockstack.org/images/app-icon-misthos-256x256.png'
  },
  {
    name: 'Souq',
    earnings: {
      usd: '$10,000',
      btc: 1.2
    },
    tags: ['Blockstack Auth', 'Gaia'],
    appIcon: 'https://browser.blockstack.org/images/app-icon-souq-256x256.png'
  }
]

const AppItemText = (props) => <ListItemText color="#212D37" {...props} />
const Tag = ({ ...rest }) => (
  <AppItemText border="1px solid #646C73" borderRadius="3px" fontSize={1} px={2} ml={2} {...rest} />
)

const AppItem = ({ name, earnings, tags, i, index, appIcon, length, ...rest }) => (
  <Flex width={1} p={[3, 4]} bg={`rgba(255,255,255, ${index / length + 0.1})`} alignItems="center">
    <AppItemText opacity={0.5} mr={3}>
      {i + 1}
    </AppItemText>
    <Flex alignItems="center">
      <AppIcon mr={3} src={appIcon} alt={name} size={42} />
      <AppItemText pr={3}>{name}</AppItemText>
    </Flex>
    <Flex display={['none', 'flex']}>
      {tags && tags.length ? tags.map((tag, tagIndex) => <Tag key={tagIndex}>{tag}</Tag>) : null}
    </Flex>
    <Flex flexDirection={['column', 'row']} ml="auto" alignItems={['flex-end', 'center']}>
      <AppItemText fontSize={3}>{earnings.usd}</AppItemText>
      <AppItemText opacity={0.5} ml={3}>
        {earnings.btc} BTC
      </AppItemText>
    </Flex>
  </Flex>
)

const appsArray = apps.map((app, i) => <AppItem key={i} i={i} index={apps.length - i} length={apps.length} {...app} />)

const Rankings = (props) => (
  <Section flexDirection="column" {...props}>
    <MiningList
      width={1}
      maxWidth="850px"
      noItemBorder
      items={[
        <Flex width={1} p={4}>
          <ListItemText opacity={0.5} mr={3} display={['none', 'block']}>
            App.co Rank
          </ListItemText>
          <ListItemText ml={['0', 'auto']} textAlign={['center', 'right']} width={['100%', 'auto']} color="#11A9BC">
            Estimated October Payouts
          </ListItemText>
        </Flex>,
        ...appsArray
      ]}
    />
  </Section>
)

const ActionBar = () => (
  <>
    <Box maxWidth="960px" mx="auto" style={{ transform: 'translateY(-25px)' }}>
      <Box borderTop="1px solid white" />
      <MiningButton mx="auto" width="250px" bg="#EF6F6F" alignItems="center" style={{ transform: 'translateY(-25px)' }}>
        View all apps
        <Box ml={2}>
          <ArrowRightIcon color="currentColor" size="1.3rem" style={{ transform: 'translateY(4px)' }} />
        </Box>
      </MiningButton>
    </Box>
  </>
)

const Earn = ({ ...props }) => (
  <>
    <Section minHeight="40vh" justifyContent="flex-end" mt={5} flexDirection="column" {...props}>
      <Box p={4}>
        <img
          src="https://file-vdymnlybqk.now.sh/"
          alt="How much can you earn?"
          style={{ maxWidth: '360px', margin: '0 auto', display: 'block' }}
        />
      </Box>
      <Heading mb={5}>How much can you earn?</Heading>
      <Box maxWidth={['80%', '500px']}>
        <SubHeading>
          We currently pay in BTC for legal compliance. We will begin paying Stacks tokens March 2019.
        </SubHeading>
      </Box>
    </Section>
    <Rankings />
    <ActionBar />
  </>
)

export { Earn }
