import React, { Component } from 'react'
import styled from 'styled-components'

const AccountContain = styled.div`
  display: flex;
`

const Account = styled.div`
  flex: 1;
  border: 2px solid #f1f1f1;
  border-radius: 3px;
  margin: 0 10px;
`

const Service = styled.div`
  font-size: 18px;
  text-align: center;
  padding: 20px 0;
`

const Section = styled.div`

`

const Header = styled.div`
  display: flex;
  padding: 15px 20px;
  background: #f1f1f1;
`

const Name = styled.div`
  flex: 1;
  font-size: 18px;
  color: #333;
`

const Icon = styled.i`
  font-size: 18px;
  padding: 4px;
  color: #c12f93;
`

const Connections = styled.div``
const Connection = styled.div`
  padding: 5px;
  display: flex;
`
const Avatar = styled.img`
  border-radius: 3px;
`
const ConnectionName = styled.div`
  flex: 1;
  font-size: 14px;
  padding: 8px 10px;
`
const Actions = styled.div`
  padding: 4px;
`

class Accounts extends Component {
  render () {
    return (
      <AccountContain>
        <Account>
          <Service>Twitter</Service>
          <Section>
            <Header>
              <Name>Profiles</Name>
              <Icon className="fa fa-plus" />
            </Header>

            <Connections>
              <Connection>
                <Avatar src="https://unsplash.it/32" />
                <ConnectionName>@g33kidd</ConnectionName>
                <Actions>
                  <Icon className="fa fa-trash" />
                </Actions>
              </Connection>
              <Connection>
                <Avatar src="https://unsplash.it/32" />
                <ConnectionName>@FundSocialApp</ConnectionName>
                <Actions>
                  <Icon className="fa fa-trash" />
                </Actions>
              </Connection>
            </Connections>

          </Section>
        </Account>
        <Account>
          <Service>Facebook</Service>
          <Section>
            <Header>
              <Name>Profiles</Name>
              <Icon className="fa fa-plus" />
            </Header>

            <Connections>
              <Connection>
                <Avatar src="https://unsplash.it/32" />
                <ConnectionName>@g33kidd</ConnectionName>
                <Actions>
                  <Icon className="fa fa-trash" />
                </Actions>
              </Connection>
              <Connection>
                <Avatar src="https://unsplash.it/32" />
                <ConnectionName>@FundSocialApp</ConnectionName>
                <Actions>
                  <Icon className="fa fa-trash" />
                </Actions>
              </Connection>
            </Connections>
          </Section>
          <Section>
            <Header>
              <Name>Pages</Name>
              <Icon className="fa fa-plus" />
            </Header>

            <Connections>
              <Connection>
                <Avatar src="https://unsplash.it/32" />
                <ConnectionName>@g33kidd</ConnectionName>
                <Actions>
                  <Icon className="fa fa-trash" />
                </Actions>
              </Connection>
              <Connection>
                <Avatar src="https://unsplash.it/32" />
                <ConnectionName>@FundSocialApp</ConnectionName>
                <Actions>
                  <Icon className="fa fa-trash" />
                </Actions>
              </Connection>
            </Connections>
          </Section>
          <Section>
            <Header>
              <Name>Groups</Name>
              <Icon className="fa fa-plus" />
            </Header>

            <Connections>
              <Connection>
                <Avatar src="https://unsplash.it/32" />
                <ConnectionName>@g33kidd</ConnectionName>
                <Actions>
                  <Icon className="fa fa-trash" />
                </Actions>
              </Connection>
              <Connection>
                <Avatar src="https://unsplash.it/32" />
                <ConnectionName>@FundSocialApp</ConnectionName>
                <Actions>
                  <Icon className="fa fa-trash" />
                </Actions>
              </Connection>
            </Connections>
          </Section>
        </Account>
        <Account>
          <Service>Pinterest</Service>
          <Section>
            <Header>
              <Name>Profiles</Name>
              <Icon className="fa fa-plus" />
            </Header>

            <Connections>
              <Connection>
                <Avatar src="https://unsplash.it/32" />
                <ConnectionName>@g33kidd</ConnectionName>
                <Actions>
                  <Icon className="fa fa-trash" />
                </Actions>
              </Connection>
              <Connection>
                <Avatar src="https://unsplash.it/32" />
                <ConnectionName>@FundSocialApp</ConnectionName>
                <Actions>
                  <Icon className="fa fa-trash" />
                </Actions>
              </Connection>
            </Connections>
          </Section>
        </Account>
        <Account>
          <Service>LinkedIn</Service>
          <Section>
            <Header>
              <Name>Profiles</Name>
              <Icon className="fa fa-plus" />
            </Header>
          </Section>
          <Section>
            <Header>
              <Name>Pages</Name>
              <Icon className="fa fa-plus" />
            </Header>

            <Connections>
              <Connection>
                <Avatar src="https://unsplash.it/32" />
                <ConnectionName>@g33kidd</ConnectionName>
                <Actions>
                  <Icon className="fa fa-trash" />
                </Actions>
              </Connection>
              <Connection>
                <Avatar src="https://unsplash.it/32" />
                <ConnectionName>@FundSocialApp</ConnectionName>
                <Actions>
                  <Icon className="fa fa-trash" />
                </Actions>
              </Connection>
            </Connections>
          </Section>
        </Account>
        <Account>
          <Service>Google+</Service>
          <Section>
            <Header>
              <Name>Pages</Name>
              <Icon className="fa fa-plus" />
            </Header>

            <Connections>
              <Connection>
                <Avatar src="https://unsplash.it/32" />
                <ConnectionName>@g33kidd</ConnectionName>
                <Actions>
                  <Icon className="fa fa-trash" />
                </Actions>
              </Connection>
              <Connection>
                <Avatar src="https://unsplash.it/32" />
                <ConnectionName>@FundSocialApp</ConnectionName>
                <Actions>
                  <Icon className="fa fa-trash" />
                </Actions>
              </Connection>
            </Connections>
          </Section>
        </Account>
      </AccountContain>
    )
  }
}

export default Accounts
