import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import { nameChanged, serverChanged, characterFetch } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class SearchCharacter extends Component {
  onNameChange(text){
    this.props.nameChanged(text);
  }

  onServerChange(server){
    this.props.serverChanged(server);
  }

  onButtonPress() {
    const { name, server } = this.props;

    this.props.characterFetch({ name, server });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Search
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Character Name"
            placeholder="Leeroy Jenkins"
            onChangeText={this.onNameChange.bind(this)}
            value={this.props.name}
          />
        </CardSection>
        <CardSection style={{
          flexDirection: 'column'
        }}>
          <Text style={styles.pickerTextStyle}>
            Select a Server
          </Text>
          <Picker style={{
            flex: 1
          }} selectedValue={this.props.server} onValueChange={this.onServerChange.bind(this)}>
          <Picker.Item label='Aegwynn' value='aegwynn'/>
          <Picker.Item label='Aerie Peak' value='aerie-peak'/>
          <Picker.Item label='Agamaggan' value='agamaggan'/>
          <Picker.Item label='Aggramar' value='aggramar'/>
          <Picker.Item label='Akama' value='akama'/>
          <Picker.Item label='Alexstrasza' value='alexstrasza'/>
          <Picker.Item label='Alleria' value='alleria'/>
          <Picker.Item label='Altar of Storms' value='altar-of-storms'/>
          <Picker.Item label='Alterac Mountains' value='alterac-mountains'/>
          <Picker.Item label="Aman'Thul" value='amanthul'/>
          <Picker.Item label='Andorhal' value='andorhal'/>
          <Picker.Item label='Anetheron' value='anetheron'/>
          <Picker.Item label='Antonidas' value='antonidas'/>
          <Picker.Item label="Anub'arak" value='anubarak'/>
          <Picker.Item label='Anvilmar' value='anvilmar'/>
          <Picker.Item label='Arathor' value='arathor'/>
          <Picker.Item label='Archimonde' value='archimonde'/>
          <Picker.Item label='Area 52' value='area-52'/>
          <Picker.Item label='Argent Dawn' value='argent-dawn'/>
          <Picker.Item label='Arthas' value='arthas'/>
          <Picker.Item label='Arygos' value='arygos'/>
          <Picker.Item label='Auchindoun' value='auchindoun'/>
          <Picker.Item label='Azgalor' value='azgalor'/>
          <Picker.Item label='Azjol-Nerub' value='azjolnerub'/>
          <Picker.Item label='Azralon' value='azralon'/>
          <Picker.Item label='Azshara' value='azshara'/>
          <Picker.Item label='Azuremyst' value='azuremyst'/>
          <Picker.Item label='Baelgun' value='baelgun'/>
          <Picker.Item label='Balnazzar' value='balnazzar'/>
          <Picker.Item label='Barthilas' value='barthilas'/>
          <Picker.Item label='Black Dragonflight' value='black-dragonflight'/>
          <Picker.Item label='Blackhand' value='blackhand'/>
          <Picker.Item label='Blackrock' value='blackrock'/>
          <Picker.Item label='Blackwater Raiders' value='blackwater-raiders'/>
          <Picker.Item label='Blackwing Lair' value='blackwing-lair'/>
          <Picker.Item label="Blade's Edge" value='blades-edge'/>
          <Picker.Item label='Bladefist' value='bladefist'/>
          <Picker.Item label='Bleeding Hollow' value='bleeding-hollow'/>
          <Picker.Item label='Blood Furnace' value='blood-furnace'/>
          <Picker.Item label='Bloodhoof' value='bloodhoof'/>
          <Picker.Item label='Bloodscalp' value='bloodscalp'/>
          <Picker.Item label='Bonechewer' value='bonechewer'/>
          <Picker.Item label='Borean Tundra' value='borean-tundra'/>
          <Picker.Item label='Boulderfist' value='boulderfist'/>
          <Picker.Item label='Bronzebeard' value='bronzebeard'/>
          <Picker.Item label='Burning Blade' value='burning-blade'/>
          <Picker.Item label='Burning Legion' value='burning-legion'/>
          <Picker.Item label='Caelestrasz' value='caelestrasz'/>
          <Picker.Item label='Cairne' value='cairne'/>
          <Picker.Item label='Cenarion Circle' value='cenarion-circle'/>
          <Picker.Item label='Cenarius' value='cenarius'/>
          <Picker.Item label="Cho'gall" value='chogall'/>
          <Picker.Item label='Chromaggus' value='chromaggus'/>
          <Picker.Item label='Coilfang' value='coilfang'/>
          <Picker.Item label='Crushridge' value='crushridge'/>
          <Picker.Item label='Daggerspine' value='daggerspine'/>
          <Picker.Item label='Dalaran' value='dalaran'/>
          <Picker.Item label='Dalvengyr' value='dalvengyr'/>
          <Picker.Item label='Dark Iron' value='dark-iron'/>
          <Picker.Item label='Darkspear' value='darkspear'/>
          <Picker.Item label='Darrowmere' value='darrowmere'/>
          <Picker.Item label="Dath'Remar" value='dathremar'/>
          <Picker.Item label='Dawnbringer' value='dawnbringer'/>
          <Picker.Item label='Deathwing' value='deathwing'/>
          <Picker.Item label='Demon Soul' value='demon-soul'/>
          <Picker.Item label='Dentarg' value='dentarg'/>
          <Picker.Item label='Destromath' value='destromath'/>
          <Picker.Item label='Dethecus' value='dethecus'/>
          <Picker.Item label='Detheroc' value='detheroc'/>
          <Picker.Item label='Doomhammer' value='doomhammer'/>
          <Picker.Item label='Draenor' value='draenor'/>
          <Picker.Item label='Dragonblight' value='dragonblight'/>
          <Picker.Item label='Dragonmaw' value='dragonmaw'/>
          <Picker.Item label="Drak'Tharon" value='draktharon'/>
          <Picker.Item label="Drak'thul" value='drakthul'/>
          <Picker.Item label='Draka' value='draka'/>
          <Picker.Item label='Drakkari' value='drakkari'/>
          <Picker.Item label='Dreadmaul' value='dreadmaul'/>
          <Picker.Item label='Drenden' value='drenden'/>
          <Picker.Item label='Dunemaul' value='dunemaul'/>
          <Picker.Item label='Durotan' value='durotan'/>
          <Picker.Item label='Duskwood' value='duskwood'/>
          <Picker.Item label='Earthen Ring' value='earthen-ring'/>
          <Picker.Item label='Echo Isles' value='echo-isles'/>
          <Picker.Item label='Eitrigg' value='eitrigg'/>
          <Picker.Item label="Eldre'Thalas" value='eldrethalas'/>
          <Picker.Item label='Elune' value='elune'/>
          <Picker.Item label='Emerald Dream' value='emerald-dream'/>
          <Picker.Item label='Eonar' value='eonar'/>
          <Picker.Item label='Eredar' value='eredar'/>
          <Picker.Item label='Executus' value='executus'/>
          <Picker.Item label='Exodar' value='exodar'/>
          <Picker.Item label='Farstriders' value='farstriders'/>
          <Picker.Item label='Feathermoon' value='feathermoon'/>
          <Picker.Item label='Fenris' value='fenris'/>
          <Picker.Item label='Firetree' value='firetree'/>
          <Picker.Item label='Fizzcrank' value='fizzcrank'/>
          <Picker.Item label='Frostmane' value='frostmane'/>
          <Picker.Item label='Frostmourne' value='frostmourne'/>
          <Picker.Item label='Frostwolf' value='frostwolf'/>
          <Picker.Item label='Galakrond' value='galakrond'/>
          <Picker.Item label='Gallywix' value='gallywix'/>
          <Picker.Item label='Garithos' value='garithos'/>
          <Picker.Item label='Garona' value='garona'/>
          <Picker.Item label='Garrosh' value='garrosh'/>
          <Picker.Item label='Ghostlands' value='ghostlands'/>
          <Picker.Item label='Gilneas' value='gilneas'/>
          <Picker.Item label='Gnomeregan' value='gnomeregan'/>
          <Picker.Item label='Goldrinn' value='goldrinn'/>
          <Picker.Item label='Gorefiend' value='gorefiend'/>
          <Picker.Item label='Gorgonnash' value='gorgonnash'/>
          <Picker.Item label='Greymane' value='greymane'/>
          <Picker.Item label='Grizzly Hills' value='grizzly-hills'/>
          <Picker.Item label="Gul'dan" value='guldan'/>
          <Picker.Item label='Gundrak' value='gundrak'/>
          <Picker.Item label='Gurubashi' value='gurubashi'/>
          <Picker.Item label='Hakkar' value='hakkar'/>
          <Picker.Item label='Haomarush' value='haomarush'/>
          <Picker.Item label='Hellscream' value='hellscream'/>
          <Picker.Item label='Hydraxis' value='hydraxis'/>
          <Picker.Item label='Hyjal' value='hyjal'/>
          <Picker.Item label='Icecrown' value='icecrown'/>
          <Picker.Item label='Illidan' value='illidan'/>
          <Picker.Item label='Jaedenar' value='jaedenar'/>
          <Picker.Item label="Jubei'Thos" value='jubeithos'/>
          <Picker.Item label="Kael'thas" value='kaelthas'/>
          <Picker.Item label='Kalecgos' value='kalecgos'/>
          <Picker.Item label='Kargath' value='kargath'/>
          <Picker.Item label="Kel'Thuzad" value='kelthuzad'/>
          <Picker.Item label='Khadgar' value='khadgar'/>
          <Picker.Item label='Khaz Modan' value='khaz-modan'/>
          <Picker.Item label="Khaz'goroth" value='khazgoroth'/>
          <Picker.Item label="Kil'jaeden" value='kiljaeden'/>
          <Picker.Item label='Kilrogg' value='kilrogg'/>
          <Picker.Item label='Kirin Tor' value='kirin-tor'/>
          <Picker.Item label='Korgath' value='korgath'/>
          <Picker.Item label='Korialstrasz' value='korialstrasz'/>
          <Picker.Item label='Kul Tiras' value='kul-tiras'/>
          <Picker.Item label='Laughing Skull' value='laughing-skull'/>
          <Picker.Item label='Lethon' value='lethon'/>
          <Picker.Item label='Lightbringer' value='lightbringer'/>
          <Picker.Item label="Lightning's Blade" value='lightnings-blade'/>
          <Picker.Item label='Lightninghoof' value='lightninghoof'/>
          <Picker.Item label='Llane' value='llane'/>
          <Picker.Item label='Lothar' value='lothar'/>
          <Picker.Item label='Madoran' value='madoran'/>
          <Picker.Item label='Maelstrom' value='maelstrom'/>
          <Picker.Item label='Magtheridon' value='magtheridon'/>
          <Picker.Item label='Maiev' value='maiev'/>
          <Picker.Item label="Mal'Ganis" value='malganis'/>
          <Picker.Item label='Malfurion' value='malfurion'/>
          <Picker.Item label='Malorne' value='malorne'/>
          <Picker.Item label='Malygos' value='malygos'/>
          <Picker.Item label='Mannoroth' value='mannoroth'/>
          <Picker.Item label='Medivh' value='medivh'/>
          <Picker.Item label='Misha' value='misha'/>
          <Picker.Item label="Mok'Nathal" value='moknathal'/>
          <Picker.Item label='Moon Guard' value='moon-guard'/>
          <Picker.Item label='Moonrunner' value='moonrunner'/>
          <Picker.Item label="Mug'thol" value='mugthol'/>
          <Picker.Item label='Muradin' value='muradin'/>
          <Picker.Item label='Nagrand' value='nagrand'/>
          <Picker.Item label='Nathrezim' value='nathrezim'/>
          <Picker.Item label='Nazgrel' value='nazgrel'/>
          <Picker.Item label='Nazjatar' value='nazjatar'/>
          <Picker.Item label='Nemesis' value='nemesis'/>
          <Picker.Item label="Ner'zhul" value='nerzhul'/>
          <Picker.Item label='Nesingwary' value='nesingwary'/>
          <Picker.Item label='Nordrassil' value='nordrassil'/>
          <Picker.Item label='Norgannon' value='norgannon'/>
          <Picker.Item label='Onyxia' value='onyxia'/>
          <Picker.Item label='Perenolde' value='perenolde'/>
          <Picker.Item label='Proudmoore' value='proudmoore'/>
          <Picker.Item label="Quel'Thalas" value='quelthalas'/>
          <Picker.Item label="Quel'dorei" value='queldorei'/>
          <Picker.Item label='Ragnaros' value='ragnaros'/>
          <Picker.Item label='Ravencrest' value='ravencrest'/>
          <Picker.Item label='Ravenholdt' value='ravenholdt'/>
          <Picker.Item label='Rexxar' value='rexxar'/>
          <Picker.Item label='Rivendare' value='rivendare'/>
          <Picker.Item label='Runetotem' value='runetotem'/>
          <Picker.Item label='Sargeras' value='sargeras'/>
          <Picker.Item label='Saurfang' value='saurfang'/>
          <Picker.Item label='Scarlet Crusade' value='scarlet-crusade'/>
          <Picker.Item label='Scilla' value='scilla'/>
          <Picker.Item label="Sen'jin" value='senjin'/>
          <Picker.Item label='Sentinels' value='sentinels'/>
          <Picker.Item label='Shadow Council' value='shadow-council'/>
          <Picker.Item label='Shadowmoon' value='shadowmoon'/>
          <Picker.Item label='Shadowsong' value='shadowsong'/>
          <Picker.Item label='Shandris' value='shandris'/>
          <Picker.Item label='Shattered Halls' value='shattered-halls'/>
          <Picker.Item label='Shattered Hand' value='shattered-hand'/>
          <Picker.Item label="Shu'halo" value='shuhalo'/>
          <Picker.Item label='Silver Hand' value='silver-hand'/>
          <Picker.Item label='Silvermoon' value='silvermoon'/>
          <Picker.Item label='Sisters of Elune' value='sisters-of-elune'/>
          <Picker.Item label='Skullcrusher' value='skullcrusher'/>
          <Picker.Item label='Skywall' value='skywall'/>
          <Picker.Item label='Smolderthorn' value='smolderthorn'/>
          <Picker.Item label='Spinebreaker' value='spinebreaker'/>
          <Picker.Item label='Spirestone' value='spirestone'/>
          <Picker.Item label='Staghelm' value='staghelm'/>
          <Picker.Item label='Steamwheedle Cartel' value='steamwheedle-cartel'/>
          <Picker.Item label='Stonemaul' value='stonemaul'/>
          <Picker.Item label='Stormrage' value='stormrage'/>
          <Picker.Item label='Stormreaver' value='stormreaver'/>
          <Picker.Item label='Stormscale' value='stormscale'/>
          <Picker.Item label='Suramar' value='suramar'/>
          <Picker.Item label='Tanaris' value='tanaris'/>
          <Picker.Item label='Terenas' value='terenas'/>
          <Picker.Item label='Terokkar' value='terokkar'/>
          <Picker.Item label='Thaurissan' value='thaurissan'/>
          <Picker.Item label='The Forgotten Coast' value='the-forgotten-coast'/>
          <Picker.Item label='The Scryers' value='the-scryers'/>
          <Picker.Item label='The Underbog' value='the-underbog'/>
          <Picker.Item label='The Venture Co' value='the-venture-co'/>
          <Picker.Item label='Thorium Brotherhood' value='thorium-brotherhood'/>
          <Picker.Item label='Thrall' value='thrall'/>
          <Picker.Item label='Thunderhorn' value='thunderhorn'/>
          <Picker.Item label='Thunderlord' value='thunderlord'/>
          <Picker.Item label='Tichondrius' value='tichondrius'/>
          <Picker.Item label='Tol Barad' value='tol-barad'/>
          <Picker.Item label='Tortheldrin' value='tortheldrin'/>
          <Picker.Item label='Trollbane' value='trollbane'/>
          <Picker.Item label='Turalyon' value='turalyon'/>
          <Picker.Item label='Twisting Nether' value='twisting-nether'/>
          <Picker.Item label='Uldaman' value='uldaman'/>
          <Picker.Item label='Uldum' value='uldum'/>
          <Picker.Item label='Undermine' value='undermine'/>
          <Picker.Item label='Ursin' value='ursin'/>
          <Picker.Item label='Uther' value='uther'/>
          <Picker.Item label='Vashj' value='vashj'/>
          <Picker.Item label="Vek'nilash" value='veknilash'/>
          <Picker.Item label='Velen' value='velen'/>
          <Picker.Item label='Warsong' value='warsong'/>
          <Picker.Item label='Whisperwind' value='whisperwind'/>
          <Picker.Item label='Wildhammer' value='wildhammer'/>
          <Picker.Item label='Windrunner' value='windrunner'/>
          <Picker.Item label='Winterhoof' value='winterhoof'/>
          <Picker.Item label='Wyrmrest Accord' value='wyrmrest-accord'/>
          <Picker.Item label='Ysera' value='ysera'/>
          <Picker.Item label='Ysondre' value='ysondre'/>
          <Picker.Item label='Zangarmarsh' value='zangarmarsh'/>
          <Picker.Item label="Zul'jin" value='zuljin'/>
          <Picker.Item label='Zuluhed' value='zuluhed'/>
          </Picker>
        </CardSection>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}


const mapStateToProps = ({characterSearch}) => {
  const { name, server, loading } = characterSearch
  return { name, server, loading }
}


export default connect(mapStateToProps, { nameChanged, serverChanged, characterFetch })(SearchCharacter);
