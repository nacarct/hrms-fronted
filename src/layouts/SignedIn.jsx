import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://i.sozcu.com.tr/wp-content/uploads/2021/06/02/iecrop/musk-reuters_16_9_1622616186-880x495.jpg"/>
        <Dropdown pointing="top left" text="Temuçin">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info"/>
            <Dropdown.Item text="Çıkış Yap" icon="close" onClick={signOut} />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
