import React from 'react';
import {
    TableHead,
    TableSortLabel,
    TableCell,
    TableRow,
    Tooltip,
    withStyles
} from '@material-ui/core';

const rows = [
    {
        id            : 'dateAppointment',
        numeric       : false,
        disablePadding: false,
        label         : 'Fecha',
        sort          : true
    },
    {
        id            : 'time',
        numeric       : false,
        disablePadding: false,
        label         : 'Hora',
        sort          : true
    },
    {
        id            : 'headquarter',
        numeric       : false,
        disablePadding: false,
        label         : 'Sede',
        sort          : true
    },
    {
        id            : 'status',
        numeric       : false,
        disablePadding: false,
        label         : 'Estado',
        sort          : true
    },
    {
        id            : 'options',
        numeric       : false,
        disablePadding: false,
        label         : 'Opciones',
        sort          : true
    },
];

const styles = theme => ({
    root                : {},
    actionsButtonWrapper: {
        position      : 'absolute',
        top           : 0,
        left          : 64,
        width         : 64,
        height        : 63,
        zIndex        : 10,
        background    : theme.palette.background.paper,
        alignItems    : 'center',
        display       : 'flex',
        justifyContent: 'center'
    }
});

class PatientExamsTableHead extends React.Component {
    state = {
        selectedCardsMenu: null
    };

    createSortHandler = property => event => {

        this.props.onRequestSort(event, property);
    };

    openSelectedCardsMenu = (event) => {
        this.setState({selectedCardsMenu: event.currentTarget});
    };

    closeSelectedCardsMenu = () => {
        this.setState({selectedCardsMenu: null});
    };

    render()
    {
        const {order, orderBy} = this.props;

        return (
            <TableHead>
                <TableRow className="h-64">
                    {rows.map(row => {
                        return (
                            <TableCell
                                key={row.id}
                                numeric={row.numeric}
                                padding={row.disablePadding ? 'none' : 'default'}
                                sortDirection={orderBy === row.id ? order : false}
                            >
                                {row.sort && (
                                    <Tooltip
                                        title="Sort"
                                        placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                                        enterDelay={300}
                                    >
                                        <TableSortLabel
                                            active={orderBy === row.id}
                                            direction={order}
                                            onClick={this.createSortHandler(row.id)}
                                        >
                                            {row.label}
                                        </TableSortLabel>
                                    </Tooltip>
                                )}
                            </TableCell>
                        );
                    }, this)}
                </TableRow>
            </TableHead>
        );
    }
}

export default withStyles(styles, {withTheme: true})(PatientExamsTableHead);
