import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import kimetsu from '../images/kimetsu.jpg';
import blackklover from '../images/blackklover.png';
import hagaren from '../images/hagaren.jpeg';
import mahouka from '../images/mahouka.jpg';
import sao from '../images/sao.jpg';
import tenseisitarasuraimu from '../images/tenseisitarasuraimu.jpg';
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
        <div className={classes.root}>
        <GridList cellHeight={500} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Battle</ListSubheader>
            </GridListTile>
            {tileData.map((tile) => (
            <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                
                
                />
            </GridListTile>
            ))}
        </GridList>
        </div>
    </div>
  );
}
