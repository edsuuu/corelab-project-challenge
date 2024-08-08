import { Navbar, Logo, CampoPesquisa, LeftContent } from './styled';
import { IoIosSearch } from 'react-icons/io';
import React from 'react';

const Navigation: React.FC = () => {
    return (
        <Navbar>
            <LeftContent>
                <Logo>
                    <img
                        src="https://s3-alpha-sig.figma.com/img/0668/b1c8/1b27213540f22b3bda3ab0125bf1fd2f?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mLZsi3VaQrXn2efN9swiNh1rEAMH~rRoWMBH3E0d0RJ8dniPBNbDHGTHwOC7jcNMKj0nBwC7udJRAXfvVV2WYKCi5qqliYuXWTL-2GSRGedbmNT6YOLTivOLNvDxkAgpj5wuZkuom5Sc2AeoTHZbEAytijMvGXnC~6nztChU91yXW904l9~78UagFXg5N8uAnR2cQ9YzgwaDKeaVjYyH5-XS0RYUoemjW1Lih4YCZy-Mxe094nWSGb2MaI4xmOb1A2TP4U16S-0KlLeai3XfeAf5UFaqz5zBMnmDTMR7bT58EWluYKpjvAm6Ok8q0UvZk3MXGcAX2sQQrqLV2gtxpw__"
                        alt="logo"
                    />
                    <h1>CoreNotes</h1>
                </Logo>
                <CampoPesquisa>
                    <input type="text" placeholder="Pesquisar notas" />
                    <IoIosSearch size={25} />
                </CampoPesquisa>
            </LeftContent>
            <div>
                <p>fechar</p>
            </div>
        </Navbar>
    );
};

export default Navigation;
