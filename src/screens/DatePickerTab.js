import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function DatePickerTab() {
  const [value, setValue] = React.useState(0);

  const tabhandle = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={tabhandle}
      variant="fullWidth"
      indicatorColor="secondary"
      textColor="secondary"
      aria-label="icon label tabs example"
    >
      <Tab label="23 MAY" icon={<p>SUN</p>} />
      <Tab label="24 MAY" icon={<p>MON</p>} />
      <Tab label="25 MAY" icon={<p>TUE</p>} />
      <Tab label="26 MAY" icon={<p>WED</p>} />
      <Tab label="27 MAY" icon={<p>THU</p>} />
      <Tab label="28 MAY" icon={<p>FRI</p>} />
      <Tab label="29 MAY" icon={<p>SAT</p>} />
    </Tabs>
  );
}
