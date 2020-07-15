import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import kimetsu from '../images/kimetsu.jpg';
import blackklover from '../images/blackklover.png';
import hagaren from '../images/hagaren2.jpg';
import mahouka from '../images/mahouka2.jpg';
import sao from '../images/sao2.jpg';
import tenseisitarasuraimu from '../images/tensura2.jpg';
import Navigation from './navbar';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '75%',
    height: '75%',
  },
  
}));

const tileData = [
    {
        img: kimetsu,
        title: '鬼滅の刃',
        author: 'author'
    },
    {
        img: blackklover,
        title: 'ブラッククローバー',
        author: 'author'
    },
    {
        img: hagaren,
        title: '鋼の錬金術師 FULLMETAL ALCHEMIST',
        author: 'author'
    },
    {
        img: mahouka,
        title: '魔法科高校の劣等生',
        author: 'author'
    },
    {
        img: sao,
        title: 'ソードアートオンライン',
        author: 'author'
    },
    {
        img: tenseisitarasuraimu,
        title: '転生したらスライムだった件',
        author: 'author'
    },
]


/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function TitlebarGridList() {
  const classes = useStyles();

  return (
      <div className="main" >
        <Navigation/> 
        <div className={classes.root} style={{backgroundColor: "#2d434e" }}>
            <GridList cellHeight={500} className={classes.gridList} >
            
                {tileData.map((tile) => (
                <GridListTile key={tile.img}>
                    <img src={tile.img} alt={tile.title} style={{width: "100%", height: "auto"}} />
                    <GridListTileBar
                    title={tile.title}
                    subtitle={<span>by: {tile.author}</span>}/>
                </GridListTile>
                ))}
            </GridList>
        </div>
    </div>
  );
}
