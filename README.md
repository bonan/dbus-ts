# dbus-ts

This project is a fork of [dbus-native](https://github.com/sidorares/dbus-native), rewritten with promises and TypeScript
definitions.

Installation
------------

```shell
npm install dbus-ts
```

Usage
------

Short example using systemd & desktop notifications service

```typescript
import { sessionBus } from 'dbus-ts';
import { Interfaces as Notifications } from '@dbus-types/notifications'
import { Interfaces as Systemd } from '@dbus-types/systemd'

async function run() {

    // Hint when creating object which dbus type definitions should be used
    const bus = await sessionBus<Notifications & Systemd>();

    const systemd = await bus.getInterface("org.freedesktop.systemd1", "/org/freedesktop/systemd1","org.freedesktop.systemd1.Manager")
    const [units] = await systemd.ListUnits()

    const numRunningUnits = units.filter(u => u[4] == 'running').length;

    const notifications = await bus.getInterface("org.freedesktop.Notifications", "/org/freedesktop/Notifications", "org.freedesktop.Notifications")
    await notifications.on('ActionInvoked', (id, action_key) => console.log("ActionInvoked", id, action_key));
    await notifications.on('NotificationClosed', (id, reason) => console.log("NotificationClosed", id, reason));

    const [id] = await notifications.Notify('dbus-ts', 0, '', `${numRunningUnits} units!`, `${numRunningUnits} units are currently running`,
        ['yes', 'Yes', 'no', 'No', 'maybe', 'Maybe'], {},  30000);

    console.log("Notification sent successfully with id " + id)

}

run().catch(err => console.log(err))
```


Type hints
------

Check out [npmjs/@dbus-types](https://www.npmjs.com/org/dbus-types) for all available type definitions

Type hints in action:

![type hints](https://github.com/bonan/dbus-ts/raw/main/typehint.png)


