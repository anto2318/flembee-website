import React, { useState } from 'react';
import { Column } from 'simple-flexbox';

const useStyles = {
    dropdownButton: {
        alignItems: 'center',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        padding: 0,
        outline: 'none'
    },
    dropdownContainer: {
        position: 'relative'
    },
    dropdownItemsContainer: {
        background: 'rgb(52, 52, 68)',
        border: `1px solid`,
        borderRadius: 5,
        minWidth: 170,
        padding: 0,
        position: 'absolute',
        width: '100%',
        top: 60,
        right: -6,
        '& button:firstOfType:hover div > svg > path': {
            fill: 'paleBlue'
        }
    },
    dropdownItem: {
        lineHeight: 3,
        cursor: 'pointer',
        background: 'transparent',
        color: 'white',
        border: 'none',
        outline: 'none',
        '&:hover': {
            background: 'paleBlue'
        },
        '&:after': {
            content: '" "',
            display: 'block',
            position: 'relative',
            bottom: -10,
            width: '100%',
            height: 1,
            background: 'paleBlue'
        },
        '&:lastChild:after': {
            content: '',
            display: 'none'
        }
    }
};

export function DropdownComponent ({ label, options }) {

    const [userMenuOpen, setUserMenuOpen] = useState(false);

    function onDropdownClick() {
        setUserMenuOpen((prev) => !prev);
    }

    function onItemClick(onClick) {
        setUserMenuOpen(false);
        onClick && onClick();
    }

    return (
        <Column style={useStyles.dropdownContainer}>
            <button style={useStyles.dropdownButton} onClick={onDropdownClick}>
                {label}
            </button>
            {userMenuOpen && (
                <Column style={useStyles.dropdownItemsContainer}>
                    {options.map((option, index) => (
                        <button
                            key={`option-${index}`}
                            style={useStyles.dropdownItem}
                            onClick={() => onItemClick(option.onClick)}
                        >
                            <i className={option.icon}></i> {option.label}
                        </button>
                    ))}
                </Column>
            )}
        </Column>
    );
}
