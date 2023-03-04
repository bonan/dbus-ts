import {Type, ObjectPath} from './utils/signature'

export declare type Interfaces = {
  "org.freedesktop.DBus": org.freedesktop.DBus
  "org.freedesktop.DBus.Introspectable": org.freedesktop.DBus.Introspectable
  "org.freedesktop.DBus.Peer": org.freedesktop.DBus.Peer
  "org.freedesktop.DBus.Properties": org.freedesktop.DBus.Properties
  "org.freedesktop.DBus.Monitoring": org.freedesktop.DBus.Monitoring
  "org.freedesktop.DBus.Debug.Stats": org.freedesktop.DBus.Debug.Stats
  "org.freedesktop.DBus.ObjectManager": org.freedesktop.DBus.ObjectManager
  "org.freedesktop.fwupd": org.freedesktop.fwupd
  "org.freedesktop.login1.Manager": org.freedesktop.login1.Manager
  "org.freedesktop.login1.User": org.freedesktop.login1.User
  "org.freedesktop.login1.Session": org.freedesktop.login1.Session
  "org.freedesktop.login1.Seat": org.freedesktop.login1.Seat
  "org.freedesktop.LogControl1": org.freedesktop.LogControl1
  "org.freedesktop.GeoClue2.Manager": org.freedesktop.GeoClue2.Manager
  "org.freedesktop.timesync1.Manager": org.freedesktop.timesync1.Manager
  "org.freedesktop.Flatpak.SystemHelper": org.freedesktop.Flatpak.SystemHelper
  "org.freedesktop.machine1.Manager": org.freedesktop.machine1.Manager
  "org.freedesktop.machine1.Image": org.freedesktop.machine1.Image
  "org.freedesktop.machine1.Machine": org.freedesktop.machine1.Machine
  "org.freedesktop.ColorManager": org.freedesktop.ColorManager
  "org.freedesktop.ColorManager.Profile": org.freedesktop.ColorManager.Profile
  "org.freedesktop.ColorManager.Device": org.freedesktop.ColorManager.Device
  "org.freedesktop.systemd1.Manager": org.freedesktop.systemd1.Manager
  "org.freedesktop.systemd1.Service": org.freedesktop.systemd1.Service
  "org.freedesktop.systemd1.Unit": org.freedesktop.systemd1.Unit
  "org.freedesktop.systemd1.Device": org.freedesktop.systemd1.Device
  "org.freedesktop.systemd1.Target": org.freedesktop.systemd1.Target
  "org.freedesktop.systemd1.Timer": org.freedesktop.systemd1.Timer
  "org.freedesktop.systemd1.Socket": org.freedesktop.systemd1.Socket
  "org.freedesktop.systemd1.Mount": org.freedesktop.systemd1.Mount
  "org.freedesktop.systemd1.Scope": org.freedesktop.systemd1.Scope
  "org.freedesktop.systemd1.Path": org.freedesktop.systemd1.Path
  "org.freedesktop.systemd1.Slice": org.freedesktop.systemd1.Slice
  "org.freedesktop.systemd1.Swap": org.freedesktop.systemd1.Swap
  "org.freedesktop.systemd1.Automount": org.freedesktop.systemd1.Automount
  "org.freedesktop.import1.Manager": org.freedesktop.import1.Manager
  "org.freedesktop.PolicyKit1.Authority": org.freedesktop.PolicyKit1.Authority
  "org.freedesktop.ratbag1.Manager": org.freedesktop.ratbag1.Manager
  "org.freedesktop.ratbag1.Led": org.freedesktop.ratbag1.Led
  "org.freedesktop.ratbag1.Button": org.freedesktop.ratbag1.Button
  "org.freedesktop.ratbag1.Resolution": org.freedesktop.ratbag1.Resolution
  "org.freedesktop.ratbag1.Profile": org.freedesktop.ratbag1.Profile
  "org.freedesktop.ratbag1.Device": org.freedesktop.ratbag1.Device
  "org.freedesktop.hostname1": org.freedesktop.hostname1
  "org.freedesktop.UPower": org.freedesktop.UPower
  "org.freedesktop.UPower.Device": org.freedesktop.UPower.Device
  "org.freedesktop.UDisks2.Manager": org.freedesktop.UDisks2.Manager
  "org.freedesktop.UDisks2.Drive": org.freedesktop.UDisks2.Drive
  "org.freedesktop.UDisks2.Block": org.freedesktop.UDisks2.Block
  "org.freedesktop.network1.Manager": org.freedesktop.network1.Manager
  "org.freedesktop.network1.Network": org.freedesktop.network1.Network
  "org.freedesktop.network1.Link": org.freedesktop.network1.Link
  "org.freedesktop.resolve1.Manager": org.freedesktop.resolve1.Manager
  "org.freedesktop.resolve1.Link": org.freedesktop.resolve1.Link
  "org.freedesktop.bolt1.Manager": org.freedesktop.bolt1.Manager
  "org.freedesktop.bolt1.Power": org.freedesktop.bolt1.Power
  "org.freedesktop.timedate1": org.freedesktop.timedate1
  "org.freedesktop.portable1.Manager": org.freedesktop.portable1.Manager
  "org.freedesktop.Accounts": org.freedesktop.Accounts
  "org.freedesktop.Accounts.User": org.freedesktop.Accounts.User
  "org.freedesktop.RealtimeKit1": org.freedesktop.RealtimeKit1
  "org.freedesktop.locale1": org.freedesktop.locale1
  "org.blueman.Mechanism": org.blueman.Mechanism
  "org.gnome.Sysprof2": org.gnome.Sysprof2
  "org.gnome.GConf.Defaults": org.gnome.GConf.Defaults
  "org.bluez.AgentManager1": org.bluez.AgentManager1
  "org.bluez.ProfileManager1": org.bluez.ProfileManager1
  "org.bluez.Adapter1": org.bluez.Adapter1
  "org.bluez.GattManager1": org.bluez.GattManager1
  "org.bluez.Media1": org.bluez.Media1
  "org.bluez.NetworkServer1": org.bluez.NetworkServer1
  "org.bluez.LEAdvertisingManager1": org.bluez.LEAdvertisingManager1
  "org.bluez.Device1": org.bluez.Device1
  "org.bluez.Network1": org.bluez.Network1
  "org.bluez.MediaControl1": org.bluez.MediaControl1
  "net.hadess.PowerProfiles": net.hadess.PowerProfiles
  "com.endlessm.ParentalControls.AccountInfo": com.endlessm.ParentalControls.AccountInfo
  "com.endlessm.ParentalControls.AppFilter": com.endlessm.ParentalControls.AppFilter
  "com.endlessm.ParentalControls.SessionLimits": com.endlessm.ParentalControls.SessionLimits
}
// org.freedesktop.DBus
export namespace DBus {
  export const
    Service = "org.freedesktop.DBus",
    Object = "/org/freedesktop/DBus",
    IDBus = "org.freedesktop.DBus",
    IIntrospectable = "org.freedesktop.DBus.Introspectable",
    IPeer = "org.freedesktop.DBus.Peer",
    IProperties = "org.freedesktop.DBus.Properties",
    IMonitoring = "org.freedesktop.DBus.Monitoring",
    IDebugStats = "org.freedesktop.DBus.Debug.Stats";
    export type IDBus = org.freedesktop.DBus;
    export type IIntrospectable = org.freedesktop.DBus.Introspectable;
    export type IPeer = org.freedesktop.DBus.Peer;
    export type IProperties = org.freedesktop.DBus.Properties;
    export type IMonitoring = org.freedesktop.DBus.Monitoring;
    export type IDebugStats = org.freedesktop.DBus.Debug.Stats;
}
// org.freedesktop.fwupd
export namespace Fwupd {
  export const
    Service = "org.freedesktop.fwupd",
    Ifwupd = "org.freedesktop.fwupd";
    export type Ifwupd = org.freedesktop.fwupd;
}
// org.freedesktop.login1
export namespace Login1 {
  export const
    Service = "org.freedesktop.login1",
    Object = "/org/freedesktop/login1",
    IManager = "org.freedesktop.login1.Manager",
    IUser = "org.freedesktop.login1.User",
    ISession = "org.freedesktop.login1.Session",
    ISeat = "org.freedesktop.login1.Seat";
    export type IManager = org.freedesktop.login1.Manager;
    export type IUser = org.freedesktop.login1.User;
    export type ISession = org.freedesktop.login1.Session;
    export type ISeat = org.freedesktop.login1.Seat;
}
// org.freedesktop.GeoClue2
export namespace GeoClue2 {
  export const
    Service = "org.freedesktop.GeoClue2",
    Object = "/org/freedesktop/GeoClue2/Manager",
    IManager = "org.freedesktop.GeoClue2.Manager";
    export type IManager = org.freedesktop.GeoClue2.Manager;
}
// org.freedesktop.timesync1
export namespace Timesync1 {
  export const
    Service = "org.freedesktop.timesync1",
    Object = "/org/freedesktop/timesync1",
    IManager = "org.freedesktop.timesync1.Manager";
    export type IManager = org.freedesktop.timesync1.Manager;
}
// org.blueman.Mechanism
export namespace OrgBluemanMechanism {
  export const
    Service = "org.blueman.Mechanism",
    IMechanism = "org.blueman.Mechanism";
    export type IMechanism = org.blueman.Mechanism;
}
// org.freedesktop.Flatpak.SystemHelper
export namespace FlatpakSystemHelper {
  export const
    Service = "org.freedesktop.Flatpak.SystemHelper",
    Object = "/org/freedesktop/Flatpak/SystemHelper",
    ISystemHelper = "org.freedesktop.Flatpak.SystemHelper";
    export type ISystemHelper = org.freedesktop.Flatpak.SystemHelper;
}
// org.freedesktop.machine1
export namespace Machine1 {
  export const
    Service = "org.freedesktop.machine1",
    Object = "/org/freedesktop/machine1",
    IManager = "org.freedesktop.machine1.Manager",
    IImage = "org.freedesktop.machine1.Image",
    IMachine = "org.freedesktop.machine1.Machine";
    export type IManager = org.freedesktop.machine1.Manager;
    export type IImage = org.freedesktop.machine1.Image;
    export type IMachine = org.freedesktop.machine1.Machine;
}
// org.freedesktop.ColorManager
export namespace ColorManager {
  export const
    Service = "org.freedesktop.ColorManager",
    Object = "/org/freedesktop/ColorManager",
    IColorManager = "org.freedesktop.ColorManager",
    IProfile = "org.freedesktop.ColorManager.Profile",
    IDevice = "org.freedesktop.ColorManager.Device";
    export type IColorManager = org.freedesktop.ColorManager;
    export type IProfile = org.freedesktop.ColorManager.Profile;
    export type IDevice = org.freedesktop.ColorManager.Device;
}
// org.gnome.Sysprof2
export namespace OrgGnomeSysprof2 {
  export const
    Service = "org.gnome.Sysprof2",
    Object = "/org/gnome/Sysprof2",
    ISysprof2 = "org.gnome.Sysprof2";
    export type ISysprof2 = org.gnome.Sysprof2;
}
// org.freedesktop.systemd1
export namespace Systemd1 {
  export const
    Service = "org.freedesktop.systemd1",
    Object = "/org/freedesktop/systemd1",
    IManager = "org.freedesktop.systemd1.Manager",
    IService = "org.freedesktop.systemd1.Service",
    IUnit = "org.freedesktop.systemd1.Unit",
    IDevice = "org.freedesktop.systemd1.Device",
    ITarget = "org.freedesktop.systemd1.Target",
    ITimer = "org.freedesktop.systemd1.Timer",
    ISocket = "org.freedesktop.systemd1.Socket",
    IMount = "org.freedesktop.systemd1.Mount",
    IScope = "org.freedesktop.systemd1.Scope",
    IPath = "org.freedesktop.systemd1.Path",
    ISlice = "org.freedesktop.systemd1.Slice",
    ISwap = "org.freedesktop.systemd1.Swap",
    IAutomount = "org.freedesktop.systemd1.Automount";
    export type IManager = org.freedesktop.systemd1.Manager;
    export type IService = org.freedesktop.systemd1.Service;
    export type IUnit = org.freedesktop.systemd1.Unit;
    export type IDevice = org.freedesktop.systemd1.Device;
    export type ITarget = org.freedesktop.systemd1.Target;
    export type ITimer = org.freedesktop.systemd1.Timer;
    export type ISocket = org.freedesktop.systemd1.Socket;
    export type IMount = org.freedesktop.systemd1.Mount;
    export type IScope = org.freedesktop.systemd1.Scope;
    export type IPath = org.freedesktop.systemd1.Path;
    export type ISlice = org.freedesktop.systemd1.Slice;
    export type ISwap = org.freedesktop.systemd1.Swap;
    export type IAutomount = org.freedesktop.systemd1.Automount;
}
// org.freedesktop.import1
export namespace Import1 {
  export const
    Service = "org.freedesktop.import1",
    Object = "/org/freedesktop/import1",
    IManager = "org.freedesktop.import1.Manager";
    export type IManager = org.freedesktop.import1.Manager;
}
// org.gnome.Sysprof3
export namespace OrgGnomeSysprof3 {
  export const
    Service = "org.gnome.Sysprof3";
}
// org.freedesktop.Avahi
export namespace Avahi {
  export const
    Service = "org.freedesktop.Avahi";
}
// org.freedesktop.PolicyKit1
export namespace PolicyKit1 {
  export const
    Service = "org.freedesktop.PolicyKit1",
    Object = "/org/freedesktop/PolicyKit1/Authority",
    IAuthority = "org.freedesktop.PolicyKit1.Authority";
    export type IAuthority = org.freedesktop.PolicyKit1.Authority;
}
// org.bluez.mesh
export namespace OrgBluezMesh {
  export const
    Service = "org.bluez.mesh";
}
// org.freedesktop.nm_priv_helper
export namespace Nm_priv_helper {
  export const
    Service = "org.freedesktop.nm_priv_helper";
}
// org.freedesktop.ratbag1
export namespace Ratbag1 {
  export const
    Service = "org.freedesktop.ratbag1",
    Object = "/org/freedesktop/ratbag1",
    IManager = "org.freedesktop.ratbag1.Manager",
    ILed = "org.freedesktop.ratbag1.Led",
    IButton = "org.freedesktop.ratbag1.Button",
    IResolution = "org.freedesktop.ratbag1.Resolution",
    IProfile = "org.freedesktop.ratbag1.Profile",
    IDevice = "org.freedesktop.ratbag1.Device";
    export type IManager = org.freedesktop.ratbag1.Manager;
    export type ILed = org.freedesktop.ratbag1.Led;
    export type IButton = org.freedesktop.ratbag1.Button;
    export type IResolution = org.freedesktop.ratbag1.Resolution;
    export type IProfile = org.freedesktop.ratbag1.Profile;
    export type IDevice = org.freedesktop.ratbag1.Device;
}
// org.freedesktop.hostname1
export namespace Hostname1 {
  export const
    Service = "org.freedesktop.hostname1",
    Object = "/org/freedesktop/hostname1",
    Ihostname1 = "org.freedesktop.hostname1";
    export type Ihostname1 = org.freedesktop.hostname1;
}
// org.freedesktop.ModemManager1
export namespace ModemManager1 {
  export const
    Service = "org.freedesktop.ModemManager1";
}
// org.bluez
export namespace OrgBluez {
  export const
    Service = "org.bluez",
    Object = "/org/bluez",
    IAgentManager1 = "org.bluez.AgentManager1",
    IProfileManager1 = "org.bluez.ProfileManager1",
    IAdapter1 = "org.bluez.Adapter1",
    IGattManager1 = "org.bluez.GattManager1",
    IMedia1 = "org.bluez.Media1",
    INetworkServer1 = "org.bluez.NetworkServer1",
    ILEAdvertisingManager1 = "org.bluez.LEAdvertisingManager1",
    IDevice1 = "org.bluez.Device1",
    INetwork1 = "org.bluez.Network1",
    IMediaControl1 = "org.bluez.MediaControl1";
    export type IAgentManager1 = org.bluez.AgentManager1;
    export type IProfileManager1 = org.bluez.ProfileManager1;
    export type IAdapter1 = org.bluez.Adapter1;
    export type IGattManager1 = org.bluez.GattManager1;
    export type IMedia1 = org.bluez.Media1;
    export type INetworkServer1 = org.bluez.NetworkServer1;
    export type ILEAdvertisingManager1 = org.bluez.LEAdvertisingManager1;
    export type IDevice1 = org.bluez.Device1;
    export type INetwork1 = org.bluez.Network1;
    export type IMediaControl1 = org.bluez.MediaControl1;
}
// org.freedesktop.UPower
export namespace UPower {
  export const
    Service = "org.freedesktop.UPower",
    Object = "/org/freedesktop/UPower",
    IUPower = "org.freedesktop.UPower",
    IDevice = "org.freedesktop.UPower.Device";
    export type IUPower = org.freedesktop.UPower;
    export type IDevice = org.freedesktop.UPower.Device;
}
// org.freedesktop.UDisks2
export namespace UDisks2 {
  export const
    Service = "org.freedesktop.UDisks2",
    Object = "/org/freedesktop/UDisks2",
    IManager = "org.freedesktop.UDisks2.Manager",
    IDrive = "org.freedesktop.UDisks2.Drive",
    IBlock = "org.freedesktop.UDisks2.Block";
    export type IManager = org.freedesktop.UDisks2.Manager;
    export type IDrive = org.freedesktop.UDisks2.Drive;
    export type IBlock = org.freedesktop.UDisks2.Block;
}
// org.freedesktop.home1
export namespace Home1 {
  export const
    Service = "org.freedesktop.home1";
}
// org.freedesktop.network1
export namespace Network1 {
  export const
    Service = "org.freedesktop.network1",
    Object = "/org/freedesktop/network1",
    IManager = "org.freedesktop.network1.Manager",
    INetwork = "org.freedesktop.network1.Network",
    ILink = "org.freedesktop.network1.Link";
    export type IManager = org.freedesktop.network1.Manager;
    export type INetwork = org.freedesktop.network1.Network;
    export type ILink = org.freedesktop.network1.Link;
}
// org.freedesktop.oom1
export namespace Oom1 {
  export const
    Service = "org.freedesktop.oom1";
}
// net.hadess.PowerProfiles
export namespace NetHadessPowerProfiles {
  export const
    Service = "net.hadess.PowerProfiles",
    Object = "/net/hadess/PowerProfiles",
    IPowerProfiles = "net.hadess.PowerProfiles";
    export type IPowerProfiles = net.hadess.PowerProfiles;
}
// org.freedesktop.resolve1
export namespace Resolve1 {
  export const
    Service = "org.freedesktop.resolve1",
    Object = "/org/freedesktop/resolve1",
    IManager = "org.freedesktop.resolve1.Manager",
    ILink = "org.freedesktop.resolve1.Link";
    export type IManager = org.freedesktop.resolve1.Manager;
    export type ILink = org.freedesktop.resolve1.Link;
}
// org.freedesktop.bolt
export namespace Bolt {
  export const
    Service = "org.freedesktop.bolt",
    Object = "/org/freedesktop/bolt",
    IManager = "org.freedesktop.bolt1.Manager",
    IPower = "org.freedesktop.bolt1.Power";
    export type IManager = org.freedesktop.bolt1.Manager;
    export type IPower = org.freedesktop.bolt1.Power;
}
// org.gnome.GConf.Defaults
export namespace OrgGnomeGConfDefaults {
  export const
    Service = "org.gnome.GConf.Defaults",
    IDefaults = "org.gnome.GConf.Defaults";
    export type IDefaults = org.gnome.GConf.Defaults;
}
// org.freedesktop.timedate1
export namespace Timedate1 {
  export const
    Service = "org.freedesktop.timedate1",
    Object = "/org/freedesktop/timedate1",
    Itimedate1 = "org.freedesktop.timedate1";
    export type Itimedate1 = org.freedesktop.timedate1;
}
// org.freedesktop.portable1
export namespace Portable1 {
  export const
    Service = "org.freedesktop.portable1",
    Object = "/org/freedesktop/portable1",
    IManager = "org.freedesktop.portable1.Manager";
    export type IManager = org.freedesktop.portable1.Manager;
}
// fi.w1.wpa_supplicant1
export namespace FiW1Wpa_supplicant1 {
  export const
    Service = "fi.w1.wpa_supplicant1";
}
// org.freedesktop.Accounts
export namespace Accounts {
  export const
    Service = "org.freedesktop.Accounts",
    Object = "/org/freedesktop/Accounts",
    IAccounts = "org.freedesktop.Accounts",
    IUser = "org.freedesktop.Accounts.User";
    export type IAccounts = org.freedesktop.Accounts;
    export type IUser = org.freedesktop.Accounts.User;
}
// org.freedesktop.RealtimeKit1
export namespace RealtimeKit1 {
  export const
    Service = "org.freedesktop.RealtimeKit1",
    Object = "/org/freedesktop/RealtimeKit1",
    IRealtimeKit1 = "org.freedesktop.RealtimeKit1";
    export type IRealtimeKit1 = org.freedesktop.RealtimeKit1;
}
// org.freedesktop.nm_dispatcher
export namespace Nm_dispatcher {
  export const
    Service = "org.freedesktop.nm_dispatcher";
}
// org.freedesktop.locale1
export namespace Locale1 {
  export const
    Service = "org.freedesktop.locale1",
    Object = "/org/freedesktop/locale1",
    Ilocale1 = "org.freedesktop.locale1";
    export type Ilocale1 = org.freedesktop.locale1;
}
export namespace org {
  export namespace freedesktop {
    export interface DBus {
      on(ev: "NameOwnerChanged", cb: (v0: string/*s*/, v1: string/*s*/, v2: string/*s*/) => void)
      on(ev: "NameLost", cb: (v0: string/*s*/) => void)
      on(ev: "NameAcquired", cb: (v0: string/*s*/) => void)
      on(ev: "ActivatableServicesChanged", cb: () => void)
      get Features(): Promise<string[]> /*as*/
      get Interfaces(): Promise<string[]> /*as*/
      Hello(): Promise<[string/*s*/]>
      RequestName(v0: string/*s*/, v1: number/*u*/): Promise<[number/*u*/]>
      ReleaseName(v0: string/*s*/): Promise<[number/*u*/]>
      StartServiceByName(v0: string/*s*/, v1: number/*u*/): Promise<[number/*u*/]>
      UpdateActivationEnvironment(v0: [string,string][]/*a{ss}*/): Promise<[]>
      NameHasOwner(v0: string/*s*/): Promise<[boolean/*b*/]>
      ListNames(): Promise<[string[]/*as*/]>
      ListActivatableNames(): Promise<[string[]/*as*/]>
      AddMatch(v0: string/*s*/): Promise<[]>
      RemoveMatch(v0: string/*s*/): Promise<[]>
      GetNameOwner(v0: string/*s*/): Promise<[string/*s*/]>
      ListQueuedOwners(v0: string/*s*/): Promise<[string[]/*as*/]>
      GetConnectionUnixUser(v0: string/*s*/): Promise<[number/*u*/]>
      GetConnectionUnixProcessID(v0: string/*s*/): Promise<[number/*u*/]>
      GetAdtAuditSessionData(v0: string/*s*/): Promise<[Buffer/*ay*/]>
      GetConnectionSELinuxSecurityContext(v0: string/*s*/): Promise<[Buffer/*ay*/]>
      ReloadConfig(): Promise<[]>
      GetId(): Promise<[string/*s*/]>
      GetConnectionCredentials(v0: string/*s*/): Promise<[[string,[Type[],any[]]][]/*a{sv}*/]>
    }
    export namespace DBus {
      export interface Introspectable {
        Introspect(): Promise<[string/*s*/]>
      }
      export interface Peer {
        GetMachineId(): Promise<[string/*s*/]>
        Ping(): Promise<[]>
      }
      export interface Properties {
        on(ev: "PropertiesChanged", cb: (interface_name: string/*s*/, changed_properties: [string,[Type[],any[]]][]/*a{sv}*/, invalidated_properties: string[]/*as*/) => void)
        Get(v0: string/*s*/, v1: string/*s*/): Promise<[[Type[],any[]]/*v*/]>
        GetAll(v0: string/*s*/): Promise<[[string,[Type[],any[]]][]/*a{sv}*/]>
        Set(v0: string/*s*/, v1: string/*s*/, v2: [/*signature*/string,any]/*v*/): Promise<[]>
      }
      export interface Monitoring {
        BecomeMonitor(v0: string[]/*as*/, v1: number/*u*/): Promise<[]>
      }
      export namespace Debug {
        export interface Stats {
          GetStats(): Promise<[[string,[Type[],any[]]][]/*a{sv}*/]>
          GetConnectionStats(v0: string/*s*/): Promise<[[string,[Type[],any[]]][]/*a{sv}*/]>
          GetAllMatchRules(): Promise<[[string,string[]][]/*a{sas}*/]>
        }
      }
      export interface ObjectManager {
        on(ev: "InterfacesAdded", cb: (object: ObjectPath/*o*/, interfaces: [string,[string,[Type[],any[]]][]][]/*a{sa{sv}}*/) => void)
        on(ev: "InterfacesRemoved", cb: (object: ObjectPath/*o*/, interfaces: string[]/*as*/) => void)
        GetManagedObjects(): Promise<[/*objects*/[ObjectPath,[string,[string,[Type[],any[]]][]][]][]/*a{oa{sa{sv}}}*/]>
      }
    }
    export interface fwupd {
      on(ev: "Changed", cb: () => void)
      on(ev: "DeviceAdded", cb: (device: [string,[Type[],any[]]][]/*a{sv}*/) => void)
      on(ev: "DeviceRemoved", cb: (device: [string,[Type[],any[]]][]/*a{sv}*/) => void)
      on(ev: "DeviceChanged", cb: (device: [string,[Type[],any[]]][]/*a{sv}*/) => void)
      on(ev: "DeviceRequest", cb: (request: [string,[Type[],any[]]][]/*a{sv}*/) => void)
      get DaemonVersion(): Promise<string> /*s*/
      get HostBkc(): Promise<string> /*s*/
      get HostVendor(): Promise<string> /*s*/
      get HostProduct(): Promise<string> /*s*/
      get HostMachineId(): Promise<string> /*s*/
      get HostSecurityId(): Promise<string> /*s*/
      get Tainted(): Promise<boolean> /*b*/
      get Interactive(): Promise<boolean> /*b*/
      get Status(): Promise<number> /*u*/
      get Percentage(): Promise<number> /*u*/
      get BatteryLevel(): Promise<number> /*u*/
      get BatteryThreshold(): Promise<number> /*u*/
      get OnlyTrusted(): Promise<boolean> /*b*/
      GetDevices(): Promise<[/*devices*/[string,[Type[],any[]]][][]/*aa{sv}*/]>
      GetPlugins(): Promise<[/*plugins*/[string,[Type[],any[]]][][]/*aa{sv}*/]>
      GetReleases(device_id: string/*s*/): Promise<[/*releases*/[string,[Type[],any[]]][][]/*aa{sv}*/]>
      GetDowngrades(device_id: string/*s*/): Promise<[/*releases*/[string,[Type[],any[]]][][]/*aa{sv}*/]>
      GetUpgrades(device_id: string/*s*/): Promise<[/*releases*/[string,[Type[],any[]]][][]/*aa{sv}*/]>
      GetDetails(handle: any/*h*/): Promise<[/*results*/[string,[Type[],any[]]][][]/*aa{sv}*/]>
      GetHistory(): Promise<[/*devices*/[string,[Type[],any[]]][][]/*aa{sv}*/]>
      GetHostSecurityAttrs(): Promise<[/*attrs*/[string,[Type[],any[]]][][]/*aa{sv}*/]>
      GetHostSecurityEvents(limit: number/*u*/): Promise<[/*attrs*/[string,[Type[],any[]]][][]/*aa{sv}*/]>
      GetReportMetadata(): Promise<[/*attrs*/[string,string][]/*a{ss}*/]>
      SetHints(hints: [string,string][]/*a{ss}*/): Promise<[]>
      Install(id: string/*s*/, handle: any/*h*/, options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[]>
      Verify(id: string/*s*/): Promise<[]>
      VerifyUpdate(id: string/*s*/): Promise<[]>
      Unlock(id: string/*s*/): Promise<[]>
      Activate(id: string/*s*/): Promise<[]>
      GetResults(id: string/*s*/): Promise<[/*results*/[string,[Type[],any[]]][]/*a{sv}*/]>
      GetRemotes(): Promise<[/*results*/[string,[Type[],any[]]][][]/*aa{sv}*/]>
      GetApprovedFirmware(): Promise<[/*checksums*/string[]/*as*/]>
      SetApprovedFirmware(checksums: string[]/*as*/): Promise<[]>
      GetBlockedFirmware(): Promise<[/*checksums*/string[]/*as*/]>
      SetBlockedFirmware(checksums: string[]/*as*/): Promise<[]>
      SetFeatureFlags(feature_flags: number/*t*/): Promise<[]>
      ClearResults(id: string/*s*/): Promise<[]>
      ModifyDevice(device_id: string/*s*/, key: string/*s*/, value: string/*s*/): Promise<[]>
      ModifyConfig(key: string/*s*/, value: string/*s*/): Promise<[]>
      UpdateMetadata(remote_id: string/*s*/, data: any/*h*/, signature: any/*h*/): Promise<[]>
      ModifyRemote(remote_id: string/*s*/, key: string/*s*/, value: string/*s*/): Promise<[]>
      SelfSign(data: string/*s*/, options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[/*sig*/string/*s*/]>
      SetBiosSettings(settings: [string,string][]/*a{ss}*/): Promise<[]>
      GetBiosSettings(): Promise<[/*attrs*/[string,[Type[],any[]]][][]/*aa{sv}*/]>
      Inhibit(reason: string/*s*/): Promise<[/*inhibit_id*/string/*s*/]>
      Uninhibit(inhibit_id: string/*s*/): Promise<[]>
      Quit(): Promise<[]>
      EmulationLoad(data: Buffer/*ay*/): Promise<[]>
      EmulationSave(): Promise<[/*data*/Buffer/*ay*/]>
    }
    export namespace login1 {
      export interface Manager {
        on(ev: "SessionNew", cb: (session_id: string/*s*/, object_path: ObjectPath/*o*/) => void)
        on(ev: "SessionRemoved", cb: (session_id: string/*s*/, object_path: ObjectPath/*o*/) => void)
        on(ev: "UserNew", cb: (uid: number/*u*/, object_path: ObjectPath/*o*/) => void)
        on(ev: "UserRemoved", cb: (uid: number/*u*/, object_path: ObjectPath/*o*/) => void)
        on(ev: "SeatNew", cb: (seat_id: string/*s*/, object_path: ObjectPath/*o*/) => void)
        on(ev: "SeatRemoved", cb: (seat_id: string/*s*/, object_path: ObjectPath/*o*/) => void)
        on(ev: "PrepareForShutdown", cb: (start: boolean/*b*/) => void)
        on(ev: "PrepareForSleep", cb: (start: boolean/*b*/) => void)
        get EnableWallMessages(): Promise<boolean> /*b*/
        set EnableWallMessages(v: boolean /* Don't use: */|Promise<boolean>)
        get WallMessage(): Promise<string> /*s*/
        set WallMessage(v: string /* Don't use: */|Promise<string>)
        get NAutoVTs(): Promise<number> /*u*/
        get KillOnlyUsers(): Promise<string[]> /*as*/
        get KillExcludeUsers(): Promise<string[]> /*as*/
        get KillUserProcesses(): Promise<boolean> /*b*/
        get RebootParameter(): Promise<string> /*s*/
        get RebootToFirmwareSetup(): Promise<boolean> /*b*/
        get RebootToBootLoaderMenu(): Promise<number> /*t*/
        get RebootToBootLoaderEntry(): Promise<string> /*s*/
        get BootLoaderEntries(): Promise<string[]> /*as*/
        get IdleHint(): Promise<boolean> /*b*/
        get IdleSinceHint(): Promise<number> /*t*/
        get IdleSinceHintMonotonic(): Promise<number> /*t*/
        get BlockInhibited(): Promise<string> /*s*/
        get DelayInhibited(): Promise<string> /*s*/
        get InhibitDelayMaxUSec(): Promise<number> /*t*/
        get UserStopDelayUSec(): Promise<number> /*t*/
        get HandlePowerKey(): Promise<string> /*s*/
        get HandlePowerKeyLongPress(): Promise<string> /*s*/
        get HandleRebootKey(): Promise<string> /*s*/
        get HandleRebootKeyLongPress(): Promise<string> /*s*/
        get HandleSuspendKey(): Promise<string> /*s*/
        get HandleSuspendKeyLongPress(): Promise<string> /*s*/
        get HandleHibernateKey(): Promise<string> /*s*/
        get HandleHibernateKeyLongPress(): Promise<string> /*s*/
        get HandleLidSwitch(): Promise<string> /*s*/
        get HandleLidSwitchExternalPower(): Promise<string> /*s*/
        get HandleLidSwitchDocked(): Promise<string> /*s*/
        get HoldoffTimeoutUSec(): Promise<number> /*t*/
        get IdleAction(): Promise<string> /*s*/
        get IdleActionUSec(): Promise<number> /*t*/
        get PreparingForShutdown(): Promise<boolean> /*b*/
        get PreparingForSleep(): Promise<boolean> /*b*/
        get ScheduledShutdown(): Promise<[string,number]> /*(st)*/
        get Docked(): Promise<boolean> /*b*/
        get LidClosed(): Promise<boolean> /*b*/
        get OnExternalPower(): Promise<boolean> /*b*/
        get RemoveIPC(): Promise<boolean> /*b*/
        get RuntimeDirectorySize(): Promise<number> /*t*/
        get RuntimeDirectoryInodesMax(): Promise<number> /*t*/
        get InhibitorsMax(): Promise<number> /*t*/
        get NCurrentInhibitors(): Promise<number> /*t*/
        get SessionsMax(): Promise<number> /*t*/
        get NCurrentSessions(): Promise<number> /*t*/
        get StopIdleSessionUSec(): Promise<number> /*t*/
        GetSession(session_id: string/*s*/): Promise<[/*object_path*/ObjectPath/*o*/]>
        GetSessionByPID(pid: number/*u*/): Promise<[/*object_path*/ObjectPath/*o*/]>
        GetUser(uid: number/*u*/): Promise<[/*object_path*/ObjectPath/*o*/]>
        GetUserByPID(pid: number/*u*/): Promise<[/*object_path*/ObjectPath/*o*/]>
        GetSeat(seat_id: string/*s*/): Promise<[/*object_path*/ObjectPath/*o*/]>
        ListSessions(): Promise<[/*sessions*/[string,number,string,string,ObjectPath][]/*a(susso)*/]>
        ListUsers(): Promise<[/*users*/[number,string,ObjectPath][]/*a(uso)*/]>
        ListSeats(): Promise<[/*seats*/[string,ObjectPath][]/*a(so)*/]>
        ListInhibitors(): Promise<[/*inhibitors*/[string,string,string,string,number,number][]/*a(ssssuu)*/]>
        CreateSession(uid: number/*u*/, pid: number/*u*/, service: string/*s*/, type: string/*s*/, cls: string/*s*/, desktop: string/*s*/, seat_id: string/*s*/, vtnr: number/*u*/, tty: string/*s*/, display: string/*s*/, remote: boolean/*b*/, remote_user: string/*s*/, remote_host: string/*s*/, properties: [string,[/*signature*/string,any]][]/*a(sv)*/): Promise<[/*session_id*/string/*s*/, /*object_path*/ObjectPath/*o*/, /*runtime_path*/string/*s*/, /*fifo_fd*/any/*h*/, /*uid*/number/*u*/, /*seat_id*/string/*s*/, /*vtnr*/number/*u*/, /*existing*/boolean/*b*/]>
        ReleaseSession(session_id: string/*s*/): Promise<[]>
        ActivateSession(session_id: string/*s*/): Promise<[]>
        ActivateSessionOnSeat(session_id: string/*s*/, seat_id: string/*s*/): Promise<[]>
        LockSession(session_id: string/*s*/): Promise<[]>
        UnlockSession(session_id: string/*s*/): Promise<[]>
        LockSessions(): Promise<[]>
        UnlockSessions(): Promise<[]>
        KillSession(session_id: string/*s*/, who: string/*s*/, signal_number: number/*i*/): Promise<[]>
        KillUser(uid: number/*u*/, signal_number: number/*i*/): Promise<[]>
        TerminateSession(session_id: string/*s*/): Promise<[]>
        TerminateUser(uid: number/*u*/): Promise<[]>
        TerminateSeat(seat_id: string/*s*/): Promise<[]>
        SetUserLinger(uid: number/*u*/, enable: boolean/*b*/, interactive: boolean/*b*/): Promise<[]>
        AttachDevice(seat_id: string/*s*/, sysfs_path: string/*s*/, interactive: boolean/*b*/): Promise<[]>
        FlushDevices(interactive: boolean/*b*/): Promise<[]>
        PowerOff(interactive: boolean/*b*/): Promise<[]>
        PowerOffWithFlags(flags: number/*t*/): Promise<[]>
        Reboot(interactive: boolean/*b*/): Promise<[]>
        RebootWithFlags(flags: number/*t*/): Promise<[]>
        Halt(interactive: boolean/*b*/): Promise<[]>
        HaltWithFlags(flags: number/*t*/): Promise<[]>
        Suspend(interactive: boolean/*b*/): Promise<[]>
        SuspendWithFlags(flags: number/*t*/): Promise<[]>
        Hibernate(interactive: boolean/*b*/): Promise<[]>
        HibernateWithFlags(flags: number/*t*/): Promise<[]>
        HybridSleep(interactive: boolean/*b*/): Promise<[]>
        HybridSleepWithFlags(flags: number/*t*/): Promise<[]>
        SuspendThenHibernate(interactive: boolean/*b*/): Promise<[]>
        SuspendThenHibernateWithFlags(flags: number/*t*/): Promise<[]>
        CanPowerOff(): Promise<[/*result*/string/*s*/]>
        CanReboot(): Promise<[/*result*/string/*s*/]>
        CanHalt(): Promise<[/*result*/string/*s*/]>
        CanSuspend(): Promise<[/*result*/string/*s*/]>
        CanHibernate(): Promise<[/*result*/string/*s*/]>
        CanHybridSleep(): Promise<[/*result*/string/*s*/]>
        CanSuspendThenHibernate(): Promise<[/*result*/string/*s*/]>
        ScheduleShutdown(type: string/*s*/, usec: number/*t*/): Promise<[]>
        CancelScheduledShutdown(): Promise<[/*cancelled*/boolean/*b*/]>
        Inhibit(what: string/*s*/, who: string/*s*/, why: string/*s*/, mode: string/*s*/): Promise<[/*pipe_fd*/any/*h*/]>
        CanRebootParameter(): Promise<[/*result*/string/*s*/]>
        SetRebootParameter(parameter: string/*s*/): Promise<[]>
        CanRebootToFirmwareSetup(): Promise<[/*result*/string/*s*/]>
        SetRebootToFirmwareSetup(enable: boolean/*b*/): Promise<[]>
        CanRebootToBootLoaderMenu(): Promise<[/*result*/string/*s*/]>
        SetRebootToBootLoaderMenu(timeout: number/*t*/): Promise<[]>
        CanRebootToBootLoaderEntry(): Promise<[/*result*/string/*s*/]>
        SetRebootToBootLoaderEntry(boot_loader_entry: string/*s*/): Promise<[]>
        SetWallMessage(wall_message: string/*s*/, enable: boolean/*b*/): Promise<[]>
      }
      export interface User {
        get UID(): Promise<number> /*u*/
        get GID(): Promise<number> /*u*/
        get Name(): Promise<string> /*s*/
        get Timestamp(): Promise<number> /*t*/
        get TimestampMonotonic(): Promise<number> /*t*/
        get RuntimePath(): Promise<string> /*s*/
        get Service(): Promise<string> /*s*/
        get Slice(): Promise<string> /*s*/
        get Display(): Promise<[string,ObjectPath]> /*(so)*/
        get State(): Promise<string> /*s*/
        get Sessions(): Promise<[string,ObjectPath][]> /*a(so)*/
        get IdleHint(): Promise<boolean> /*b*/
        get IdleSinceHint(): Promise<number> /*t*/
        get IdleSinceHintMonotonic(): Promise<number> /*t*/
        get Linger(): Promise<boolean> /*b*/
        Terminate(): Promise<[]>
        Kill(signal_number: number/*i*/): Promise<[]>
      }
      export interface Session {
        on(ev: "PauseDevice", cb: (major: number/*u*/, minor: number/*u*/, type: string/*s*/) => void)
        on(ev: "ResumeDevice", cb: (major: number/*u*/, minor: number/*u*/, fd: any/*h*/) => void)
        on(ev: "Lock", cb: () => void)
        on(ev: "Unlock", cb: () => void)
        get Id(): Promise<string> /*s*/
        get User(): Promise<[number,ObjectPath]> /*(uo)*/
        get Name(): Promise<string> /*s*/
        get Timestamp(): Promise<number> /*t*/
        get TimestampMonotonic(): Promise<number> /*t*/
        get VTNr(): Promise<number> /*u*/
        get Seat(): Promise<[string,ObjectPath]> /*(so)*/
        get TTY(): Promise<string> /*s*/
        get Display(): Promise<string> /*s*/
        get Remote(): Promise<boolean> /*b*/
        get RemoteHost(): Promise<string> /*s*/
        get RemoteUser(): Promise<string> /*s*/
        get Service(): Promise<string> /*s*/
        get Desktop(): Promise<string> /*s*/
        get Scope(): Promise<string> /*s*/
        get Leader(): Promise<number> /*u*/
        get Audit(): Promise<number> /*u*/
        get Type(): Promise<string> /*s*/
        get Class(): Promise<string> /*s*/
        get Active(): Promise<boolean> /*b*/
        get State(): Promise<string> /*s*/
        get IdleHint(): Promise<boolean> /*b*/
        get IdleSinceHint(): Promise<number> /*t*/
        get IdleSinceHintMonotonic(): Promise<number> /*t*/
        get LockedHint(): Promise<boolean> /*b*/
        Terminate(): Promise<[]>
        Activate(): Promise<[]>
        Lock(): Promise<[]>
        Unlock(): Promise<[]>
        SetIdleHint(idle: boolean/*b*/): Promise<[]>
        SetLockedHint(locked: boolean/*b*/): Promise<[]>
        Kill(who: string/*s*/, signal_number: number/*i*/): Promise<[]>
        TakeControl(force: boolean/*b*/): Promise<[]>
        ReleaseControl(): Promise<[]>
        SetType(type: string/*s*/): Promise<[]>
        SetDisplay(display: string/*s*/): Promise<[]>
        TakeDevice(major: number/*u*/, minor: number/*u*/): Promise<[/*fd*/any/*h*/, /*inactive*/boolean/*b*/]>
        ReleaseDevice(major: number/*u*/, minor: number/*u*/): Promise<[]>
        PauseDeviceComplete(major: number/*u*/, minor: number/*u*/): Promise<[]>
        SetBrightness(subsystem: string/*s*/, name: string/*s*/, brightness: number/*u*/): Promise<[]>
      }
      export interface Seat {
        get Id(): Promise<string> /*s*/
        get ActiveSession(): Promise<[string,ObjectPath]> /*(so)*/
        get CanTTY(): Promise<boolean> /*b*/
        get CanGraphical(): Promise<boolean> /*b*/
        get Sessions(): Promise<[string,ObjectPath][]> /*a(so)*/
        get IdleHint(): Promise<boolean> /*b*/
        get IdleSinceHint(): Promise<number> /*t*/
        get IdleSinceHintMonotonic(): Promise<number> /*t*/
        Terminate(): Promise<[]>
        ActivateSession(session_id: string/*s*/): Promise<[]>
        SwitchTo(vtnr: number/*u*/): Promise<[]>
        SwitchToNext(): Promise<[]>
        SwitchToPrevious(): Promise<[]>
      }
    }
    export interface LogControl1 {
      get LogLevel(): Promise<string> /*s*/
      set LogLevel(v: string /* Don't use: */|Promise<string>)
      get LogTarget(): Promise<string> /*s*/
      set LogTarget(v: string /* Don't use: */|Promise<string>)
      get SyslogIdentifier(): Promise<string> /*s*/
    }
    export namespace GeoClue2 {
      export interface Manager {
        get InUse(): Promise<boolean> /*b*/
        get AvailableAccuracyLevel(): Promise<number> /*u*/
        GetClient(): Promise<[/*client*/ObjectPath/*o*/]>
        CreateClient(): Promise<[/*client*/ObjectPath/*o*/]>
        DeleteClient(client: ObjectPath/*o*/): Promise<[]>
        AddAgent(id: string/*s*/): Promise<[]>
      }
    }
    export namespace timesync1 {
      export interface Manager {
        get LinkNTPServers(): Promise<string[]> /*as*/
        get SystemNTPServers(): Promise<string[]> /*as*/
        get RuntimeNTPServers(): Promise<string[]> /*as*/
        get FallbackNTPServers(): Promise<string[]> /*as*/
        get ServerName(): Promise<string> /*s*/
        get ServerAddress(): Promise<[number,Buffer]> /*(iay)*/
        get RootDistanceMaxUSec(): Promise<number> /*t*/
        get PollIntervalMinUSec(): Promise<number> /*t*/
        get PollIntervalMaxUSec(): Promise<number> /*t*/
        get PollIntervalUSec(): Promise<number> /*t*/
        get NTPMessage(): Promise<[number,number,number,number,number,number,number,Buffer,number,number,number,number,boolean,number,number]> /*(uuuuittayttttbtt)*/
        get Frequency(): Promise<number> /*x*/
        SetRuntimeNTPServers(runtime_servers: string[]/*as*/): Promise<[]>
      }
    }
    export namespace Flatpak {
      export interface SystemHelper {
        get version(): Promise<number> /*u*/
        Deploy(repo_path: Buffer/*ay*/, flags: number/*u*/, ref: string/*s*/, origin: string/*s*/, subpaths: string[]/*as*/, previous_ids: string[]/*as*/, installation: string/*s*/): Promise<[]>
        DeployAppstream(repo_path: Buffer/*ay*/, flags: number/*u*/, origin: string/*s*/, arch: string/*s*/, installation: string/*s*/): Promise<[]>
        Uninstall(flags: number/*u*/, ref: string/*s*/, installation: string/*s*/): Promise<[]>
        InstallBundle(bundle_path: Buffer/*ay*/, flags: number/*u*/, remote: string/*s*/, installation: string/*s*/): Promise<[/*ref*/string/*s*/]>
        ConfigureRemote(flags: number/*u*/, remote: string/*s*/, config: string/*s*/, gpg_key: Buffer/*ay*/, installation: string/*s*/): Promise<[]>
        Configure(flags: number/*u*/, key: string/*s*/, value: string/*s*/, installation: string/*s*/): Promise<[]>
        UpdateRemote(flags: number/*u*/, remote: string/*s*/, installation: string/*s*/, summary_path: Buffer/*ay*/, summary_sig_path: Buffer/*ay*/): Promise<[]>
        RemoveLocalRef(flags: number/*u*/, remote: string/*s*/, ref: string/*s*/, installation: string/*s*/): Promise<[]>
        PruneLocalRepo(flags: number/*u*/, installation: string/*s*/): Promise<[]>
        RunTriggers(flags: number/*u*/, installation: string/*s*/): Promise<[]>
        EnsureRepo(flags: number/*u*/, installation: string/*s*/): Promise<[]>
        UpdateSummary(flags: number/*u*/, installation: string/*s*/): Promise<[]>
        GenerateOciSummary(flags: number/*u*/, origin: string/*s*/, installation: string/*s*/): Promise<[]>
        CancelPull(flags: number/*u*/, installation: string/*s*/, src_dir: string/*s*/): Promise<[]>
        GetRevokefsFd(flags: number/*u*/, installation: string/*s*/): Promise<[/*fd_index*/any/*h*/, /*src_dir*/string/*s*/]>
      }
    }
    export namespace machine1 {
      export interface Manager {
        on(ev: "MachineNew", cb: (machine: string/*s*/, path: ObjectPath/*o*/) => void)
        on(ev: "MachineRemoved", cb: (machine: string/*s*/, path: ObjectPath/*o*/) => void)
        get PoolPath(): Promise<string> /*s*/
        get PoolUsage(): Promise<number> /*t*/
        get PoolLimit(): Promise<number> /*t*/
        GetMachine(name: string/*s*/): Promise<[/*machine*/ObjectPath/*o*/]>
        GetImage(name: string/*s*/): Promise<[/*image*/ObjectPath/*o*/]>
        GetMachineByPID(pid: number/*u*/): Promise<[/*machine*/ObjectPath/*o*/]>
        ListMachines(): Promise<[/*machines*/[string,string,string,ObjectPath][]/*a(ssso)*/]>
        ListImages(): Promise<[/*images*/[string,string,boolean,number,number,number,ObjectPath][]/*a(ssbttto)*/]>
        CreateMachine(name: string/*s*/, id: Buffer/*ay*/, service: string/*s*/, cls: string/*s*/, leader: number/*u*/, root_directory: string/*s*/, scope_properties: [string,[/*signature*/string,any]][]/*a(sv)*/): Promise<[/*path*/ObjectPath/*o*/]>
        CreateMachineWithNetwork(name: string/*s*/, id: Buffer/*ay*/, service: string/*s*/, cls: string/*s*/, leader: number/*u*/, root_directory: string/*s*/, ifindices: number[]/*ai*/, scope_properties: [string,[/*signature*/string,any]][]/*a(sv)*/): Promise<[/*path*/ObjectPath/*o*/]>
        RegisterMachine(name: string/*s*/, id: Buffer/*ay*/, service: string/*s*/, cls: string/*s*/, leader: number/*u*/, root_directory: string/*s*/): Promise<[/*path*/ObjectPath/*o*/]>
        RegisterMachineWithNetwork(name: string/*s*/, id: Buffer/*ay*/, service: string/*s*/, cls: string/*s*/, leader: number/*u*/, root_directory: string/*s*/, ifindices: number[]/*ai*/): Promise<[/*path*/ObjectPath/*o*/]>
        UnregisterMachine(name: string/*s*/): Promise<[]>
        TerminateMachine(id: string/*s*/): Promise<[]>
        KillMachine(name: string/*s*/, who: string/*s*/, signal: number/*i*/): Promise<[]>
        GetMachineAddresses(name: string/*s*/): Promise<[/*addresses*/[number,Buffer][]/*a(iay)*/]>
        GetMachineOSRelease(name: string/*s*/): Promise<[/*fields*/[string,string][]/*a{ss}*/]>
        OpenMachinePTY(name: string/*s*/): Promise<[/*pty*/any/*h*/, /*pty_path*/string/*s*/]>
        OpenMachineLogin(name: string/*s*/): Promise<[/*pty*/any/*h*/, /*pty_path*/string/*s*/]>
        OpenMachineShell(name: string/*s*/, user: string/*s*/, path: string/*s*/, args: string[]/*as*/, environment: string[]/*as*/): Promise<[/*pty*/any/*h*/, /*pty_path*/string/*s*/]>
        BindMountMachine(name: string/*s*/, source: string/*s*/, destination: string/*s*/, read_only: boolean/*b*/, mkdir: boolean/*b*/): Promise<[]>
        CopyFromMachine(name: string/*s*/, source: string/*s*/, destination: string/*s*/): Promise<[]>
        CopyToMachine(name: string/*s*/, source: string/*s*/, destination: string/*s*/): Promise<[]>
        CopyFromMachineWithFlags(name: string/*s*/, source: string/*s*/, destination: string/*s*/, flags: number/*t*/): Promise<[]>
        CopyToMachineWithFlags(name: string/*s*/, source: string/*s*/, destination: string/*s*/, flags: number/*t*/): Promise<[]>
        OpenMachineRootDirectory(name: string/*s*/): Promise<[/*fd*/any/*h*/]>
        GetMachineUIDShift(name: string/*s*/): Promise<[/*shift*/number/*u*/]>
        RemoveImage(name: string/*s*/): Promise<[]>
        RenameImage(name: string/*s*/, new_name: string/*s*/): Promise<[]>
        CloneImage(name: string/*s*/, new_name: string/*s*/, read_only: boolean/*b*/): Promise<[]>
        MarkImageReadOnly(name: string/*s*/, read_only: boolean/*b*/): Promise<[]>
        GetImageHostname(name: string/*s*/): Promise<[/*hostname*/string/*s*/]>
        GetImageMachineID(name: string/*s*/): Promise<[/*id*/Buffer/*ay*/]>
        GetImageMachineInfo(name: string/*s*/): Promise<[/*machine_info*/[string,string][]/*a{ss}*/]>
        GetImageOSRelease(name: string/*s*/): Promise<[/*os_release*/[string,string][]/*a{ss}*/]>
        SetPoolLimit(size: number/*t*/): Promise<[]>
        SetImageLimit(name: string/*s*/, size: number/*t*/): Promise<[]>
        CleanPool(mode: string/*s*/): Promise<[/*images*/[string,number][]/*a(st)*/]>
        MapFromMachineUser(name: string/*s*/, uid_inner: number/*u*/): Promise<[/*uid_outer*/number/*u*/]>
        MapToMachineUser(uid_outer: number/*u*/): Promise<[/*machine_name*/string/*s*/, /*machine_path*/ObjectPath/*o*/, /*uid_inner*/number/*u*/]>
        MapFromMachineGroup(name: string/*s*/, gid_inner: number/*u*/): Promise<[/*gid_outer*/number/*u*/]>
        MapToMachineGroup(gid_outer: number/*u*/): Promise<[/*machine_name*/string/*s*/, /*machine_path*/ObjectPath/*o*/, /*gid_inner*/number/*u*/]>
      }
      export interface Image {
        get Name(): Promise<string> /*s*/
        get Path(): Promise<string> /*s*/
        get Type(): Promise<string> /*s*/
        get ReadOnly(): Promise<boolean> /*b*/
        get CreationTimestamp(): Promise<number> /*t*/
        get ModificationTimestamp(): Promise<number> /*t*/
        get Usage(): Promise<number> /*t*/
        get Limit(): Promise<number> /*t*/
        get UsageExclusive(): Promise<number> /*t*/
        get LimitExclusive(): Promise<number> /*t*/
        Remove(): Promise<[]>
        Rename(v0: string/*s*/): Promise<[]>
        Clone(v0: string/*s*/, v1: boolean/*b*/): Promise<[]>
        MarkReadOnly(v0: boolean/*b*/): Promise<[]>
        SetLimit(v0: number/*t*/): Promise<[]>
        GetHostname(): Promise<[string/*s*/]>
        GetMachineID(): Promise<[Buffer/*ay*/]>
        GetMachineInfo(): Promise<[[string,string][]/*a{ss}*/]>
        GetOSRelease(): Promise<[[string,string][]/*a{ss}*/]>
      }
      export interface Machine {
        get Name(): Promise<string> /*s*/
        get Id(): Promise<Buffer> /*ay*/
        get Timestamp(): Promise<number> /*t*/
        get TimestampMonotonic(): Promise<number> /*t*/
        get Service(): Promise<string> /*s*/
        get Unit(): Promise<string> /*s*/
        get Leader(): Promise<number> /*u*/
        get Class(): Promise<string> /*s*/
        get RootDirectory(): Promise<string> /*s*/
        get NetworkInterfaces(): Promise<number[]> /*ai*/
        get State(): Promise<string> /*s*/
        Terminate(): Promise<[]>
        Kill(who: string/*s*/, signal: number/*i*/): Promise<[]>
        GetAddresses(): Promise<[/*addresses*/[number,Buffer][]/*a(iay)*/]>
        GetOSRelease(): Promise<[/*fields*/[string,string][]/*a{ss}*/]>
        GetUIDShift(): Promise<[/*shift*/number/*u*/]>
        OpenPTY(): Promise<[/*pty*/any/*h*/, /*pty_path*/string/*s*/]>
        OpenLogin(): Promise<[/*pty*/any/*h*/, /*pty_path*/string/*s*/]>
        OpenShell(user: string/*s*/, path: string/*s*/, args: string[]/*as*/, environment: string[]/*as*/): Promise<[/*pty*/any/*h*/, /*pty_path*/string/*s*/]>
        BindMount(source: string/*s*/, destination: string/*s*/, read_only: boolean/*b*/, mkdir: boolean/*b*/): Promise<[]>
        CopyFrom(source: string/*s*/, destination: string/*s*/): Promise<[]>
        CopyTo(source: string/*s*/, destination: string/*s*/): Promise<[]>
        CopyFromWithFlags(source: string/*s*/, destination: string/*s*/, flags: number/*t*/): Promise<[]>
        CopyToWithFlags(source: string/*s*/, destination: string/*s*/, flags: number/*t*/): Promise<[]>
        OpenRootDirectory(): Promise<[/*fd*/any/*h*/]>
      }
    }
    export interface ColorManager {
      on(ev: "Changed", cb: () => void)
      on(ev: "DeviceAdded", cb: (object_path: ObjectPath/*o*/) => void)
      on(ev: "DeviceRemoved", cb: (object_path: ObjectPath/*o*/) => void)
      on(ev: "DeviceChanged", cb: (object_path: ObjectPath/*o*/) => void)
      on(ev: "ProfileAdded", cb: (object_path: ObjectPath/*o*/) => void)
      on(ev: "ProfileRemoved", cb: (object_path: ObjectPath/*o*/) => void)
      on(ev: "SensorAdded", cb: (object_path: ObjectPath/*o*/) => void)
      on(ev: "SensorRemoved", cb: (object_path: ObjectPath/*o*/) => void)
      on(ev: "ProfileChanged", cb: (object_path: ObjectPath/*o*/) => void)
      get DaemonVersion(): Promise<string> /*s*/
      get SystemVendor(): Promise<string> /*s*/
      get SystemModel(): Promise<string> /*s*/
      GetDevices(): Promise<[/*devices*/ObjectPath[]/*ao*/]>
      GetDevicesByKind(kind: string/*s*/): Promise<[/*devices*/ObjectPath[]/*ao*/]>
      FindDeviceById(device_id: string/*s*/): Promise<[/*object_path*/ObjectPath/*o*/]>
      FindSensorById(sensor_id: string/*s*/): Promise<[/*object_path*/ObjectPath/*o*/]>
      FindDeviceByProperty(key: string/*s*/, value: string/*s*/): Promise<[/*object_path*/ObjectPath/*o*/]>
      FindProfileById(profile_id: string/*s*/): Promise<[/*object_path*/ObjectPath/*o*/]>
      FindProfileByProperty(key: string/*s*/, value: string/*s*/): Promise<[/*object_path*/ObjectPath/*o*/]>
      FindProfileByFilename(filename: string/*s*/): Promise<[/*object_path*/ObjectPath/*o*/]>
      GetStandardSpace(standard_space: string/*s*/): Promise<[/*object_path*/ObjectPath/*o*/]>
      GetProfiles(): Promise<[/*devices*/ObjectPath[]/*ao*/]>
      GetSensors(): Promise<[/*devices*/ObjectPath[]/*ao*/]>
      GetProfilesByKind(kind: string/*s*/): Promise<[/*devices*/ObjectPath[]/*ao*/]>
      CreateProfileWithFd(profile_id: string/*s*/, scope: string/*s*/, handle: any/*h*/, properties: [string,string][]/*a{ss}*/): Promise<[/*object_path*/ObjectPath/*o*/]>
      CreateProfile(profile_id: string/*s*/, scope: string/*s*/, properties: [string,string][]/*a{ss}*/): Promise<[/*object_path*/ObjectPath/*o*/]>
      CreateDevice(device_id: string/*s*/, scope: string/*s*/, properties: [string,string][]/*a{ss}*/): Promise<[/*object_path*/ObjectPath/*o*/]>
      DeleteDevice(object_path: ObjectPath/*o*/): Promise<[]>
      DeleteProfile(object_path: ObjectPath/*o*/): Promise<[]>
    }
    export namespace ColorManager {
      export interface Profile {
        on(ev: "Changed", cb: () => void)
        get ProfileId(): Promise<string> /*s*/
        get Title(): Promise<string> /*s*/
        get Metadata(): Promise<[string,string][]> /*a{ss}*/
        get Qualifier(): Promise<string> /*s*/
        get Format(): Promise<string> /*s*/
        get Kind(): Promise<string> /*s*/
        get Colorspace(): Promise<string> /*s*/
        get HasVcgt(): Promise<boolean> /*b*/
        get IsSystemWide(): Promise<boolean> /*b*/
        get Filename(): Promise<string> /*s*/
        get Created(): Promise<number> /*x*/
        get Scope(): Promise<string> /*s*/
        get Owner(): Promise<number> /*u*/
        get Warnings(): Promise<string[]> /*as*/
        SetProperty(property_name: string/*s*/, property_value: string/*s*/): Promise<[]>
        InstallSystemWide(): Promise<[]>
      }
      export interface Device {
        on(ev: "Changed", cb: () => void)
        get Created(): Promise<number> /*t*/
        get Modified(): Promise<number> /*t*/
        get Model(): Promise<string> /*s*/
        get Serial(): Promise<string> /*s*/
        get Vendor(): Promise<string> /*s*/
        get Colorspace(): Promise<string> /*s*/
        get Kind(): Promise<string> /*s*/
        get DeviceId(): Promise<string> /*s*/
        get Profiles(): Promise<ObjectPath[]> /*ao*/
        get Mode(): Promise<string> /*s*/
        get Format(): Promise<string> /*s*/
        get Scope(): Promise<string> /*s*/
        get Owner(): Promise<number> /*u*/
        get Enabled(): Promise<boolean> /*b*/
        get Seat(): Promise<string> /*s*/
        get Embedded(): Promise<boolean> /*b*/
        get Metadata(): Promise<[string,string][]> /*a{ss}*/
        get ProfilingInhibitors(): Promise<string[]> /*as*/
        SetProperty(property_name: string/*s*/, property_value: string/*s*/): Promise<[]>
        AddProfile(relation: string/*s*/, object_path: ObjectPath/*o*/): Promise<[]>
        RemoveProfile(object_path: ObjectPath/*o*/): Promise<[]>
        MakeProfileDefault(profile_path: ObjectPath/*o*/): Promise<[]>
        GetProfileForQualifiers(qualifiers: string[]/*as*/): Promise<[/*object_path*/ObjectPath/*o*/]>
        GetProfileRelation(object_path: ObjectPath/*o*/): Promise<[/*relation*/string/*s*/]>
        ProfilingInhibit(): Promise<[]>
        ProfilingUninhibit(): Promise<[]>
        SetEnabled(enabled: boolean/*b*/): Promise<[]>
      }
    }
    export namespace systemd1 {
      export interface Manager {
        on(ev: "UnitNew", cb: (id: string/*s*/, unit: ObjectPath/*o*/) => void)
        on(ev: "UnitRemoved", cb: (id: string/*s*/, unit: ObjectPath/*o*/) => void)
        on(ev: "JobNew", cb: (id: number/*u*/, job: ObjectPath/*o*/, unit: string/*s*/) => void)
        on(ev: "JobRemoved", cb: (id: number/*u*/, job: ObjectPath/*o*/, unit: string/*s*/, result: string/*s*/) => void)
        on(ev: "StartupFinished", cb: (firmware: number/*t*/, loader: number/*t*/, kernel: number/*t*/, initrd: number/*t*/, userspace: number/*t*/, total: number/*t*/) => void)
        on(ev: "UnitFilesChanged", cb: () => void)
        on(ev: "Reloading", cb: (active: boolean/*b*/) => void)
        get Version(): Promise<string> /*s*/
        get Features(): Promise<string> /*s*/
        get Virtualization(): Promise<string> /*s*/
        get Architecture(): Promise<string> /*s*/
        get Tainted(): Promise<string> /*s*/
        get FirmwareTimestamp(): Promise<number> /*t*/
        get FirmwareTimestampMonotonic(): Promise<number> /*t*/
        get LoaderTimestamp(): Promise<number> /*t*/
        get LoaderTimestampMonotonic(): Promise<number> /*t*/
        get KernelTimestamp(): Promise<number> /*t*/
        get KernelTimestampMonotonic(): Promise<number> /*t*/
        get InitRDTimestamp(): Promise<number> /*t*/
        get InitRDTimestampMonotonic(): Promise<number> /*t*/
        get UserspaceTimestamp(): Promise<number> /*t*/
        get UserspaceTimestampMonotonic(): Promise<number> /*t*/
        get FinishTimestamp(): Promise<number> /*t*/
        get FinishTimestampMonotonic(): Promise<number> /*t*/
        get SecurityStartTimestamp(): Promise<number> /*t*/
        get SecurityStartTimestampMonotonic(): Promise<number> /*t*/
        get SecurityFinishTimestamp(): Promise<number> /*t*/
        get SecurityFinishTimestampMonotonic(): Promise<number> /*t*/
        get GeneratorsStartTimestamp(): Promise<number> /*t*/
        get GeneratorsStartTimestampMonotonic(): Promise<number> /*t*/
        get GeneratorsFinishTimestamp(): Promise<number> /*t*/
        get GeneratorsFinishTimestampMonotonic(): Promise<number> /*t*/
        get UnitsLoadStartTimestamp(): Promise<number> /*t*/
        get UnitsLoadStartTimestampMonotonic(): Promise<number> /*t*/
        get UnitsLoadFinishTimestamp(): Promise<number> /*t*/
        get UnitsLoadFinishTimestampMonotonic(): Promise<number> /*t*/
        get UnitsLoadTimestamp(): Promise<number> /*t*/
        get UnitsLoadTimestampMonotonic(): Promise<number> /*t*/
        get InitRDSecurityStartTimestamp(): Promise<number> /*t*/
        get InitRDSecurityStartTimestampMonotonic(): Promise<number> /*t*/
        get InitRDSecurityFinishTimestamp(): Promise<number> /*t*/
        get InitRDSecurityFinishTimestampMonotonic(): Promise<number> /*t*/
        get InitRDGeneratorsStartTimestamp(): Promise<number> /*t*/
        get InitRDGeneratorsStartTimestampMonotonic(): Promise<number> /*t*/
        get InitRDGeneratorsFinishTimestamp(): Promise<number> /*t*/
        get InitRDGeneratorsFinishTimestampMonotonic(): Promise<number> /*t*/
        get InitRDUnitsLoadStartTimestamp(): Promise<number> /*t*/
        get InitRDUnitsLoadStartTimestampMonotonic(): Promise<number> /*t*/
        get InitRDUnitsLoadFinishTimestamp(): Promise<number> /*t*/
        get InitRDUnitsLoadFinishTimestampMonotonic(): Promise<number> /*t*/
        get LogLevel(): Promise<string> /*s*/
        set LogLevel(v: string /* Don't use: */|Promise<string>)
        get LogTarget(): Promise<string> /*s*/
        set LogTarget(v: string /* Don't use: */|Promise<string>)
        get NNames(): Promise<number> /*u*/
        get NFailedUnits(): Promise<number> /*u*/
        get NJobs(): Promise<number> /*u*/
        get NInstalledJobs(): Promise<number> /*u*/
        get NFailedJobs(): Promise<number> /*u*/
        get Progress(): Promise<number> /*d*/
        get Environment(): Promise<string[]> /*as*/
        get ConfirmSpawn(): Promise<boolean> /*b*/
        get ShowStatus(): Promise<boolean> /*b*/
        get UnitPath(): Promise<string[]> /*as*/
        get DefaultStandardOutput(): Promise<string> /*s*/
        get DefaultStandardError(): Promise<string> /*s*/
        get WatchdogDevice(): Promise<string> /*s*/
        get WatchdogLastPingTimestamp(): Promise<number> /*t*/
        get WatchdogLastPingTimestampMonotonic(): Promise<number> /*t*/
        get RuntimeWatchdogUSec(): Promise<number> /*t*/
        set RuntimeWatchdogUSec(v: number /* Don't use: */|Promise<number>)
        get RuntimeWatchdogPreUSec(): Promise<number> /*t*/
        set RuntimeWatchdogPreUSec(v: number /* Don't use: */|Promise<number>)
        get RuntimeWatchdogPreGovernor(): Promise<string> /*s*/
        set RuntimeWatchdogPreGovernor(v: string /* Don't use: */|Promise<string>)
        get RebootWatchdogUSec(): Promise<number> /*t*/
        set RebootWatchdogUSec(v: number /* Don't use: */|Promise<number>)
        get KExecWatchdogUSec(): Promise<number> /*t*/
        set KExecWatchdogUSec(v: number /* Don't use: */|Promise<number>)
        get ServiceWatchdogs(): Promise<boolean> /*b*/
        set ServiceWatchdogs(v: boolean /* Don't use: */|Promise<boolean>)
        get ControlGroup(): Promise<string> /*s*/
        get SystemState(): Promise<string> /*s*/
        get ExitCode(): Promise<number> /*y*/
        get DefaultTimerAccuracyUSec(): Promise<number> /*t*/
        get DefaultTimeoutStartUSec(): Promise<number> /*t*/
        get DefaultTimeoutStopUSec(): Promise<number> /*t*/
        get DefaultTimeoutAbortUSec(): Promise<number> /*t*/
        get DefaultDeviceTimeoutUSec(): Promise<number> /*t*/
        get DefaultRestartUSec(): Promise<number> /*t*/
        get DefaultStartLimitIntervalUSec(): Promise<number> /*t*/
        get DefaultStartLimitBurst(): Promise<number> /*u*/
        get DefaultCPUAccounting(): Promise<boolean> /*b*/
        get DefaultBlockIOAccounting(): Promise<boolean> /*b*/
        get DefaultMemoryAccounting(): Promise<boolean> /*b*/
        get DefaultTasksAccounting(): Promise<boolean> /*b*/
        get DefaultLimitCPU(): Promise<number> /*t*/
        get DefaultLimitCPUSoft(): Promise<number> /*t*/
        get DefaultLimitFSIZE(): Promise<number> /*t*/
        get DefaultLimitFSIZESoft(): Promise<number> /*t*/
        get DefaultLimitDATA(): Promise<number> /*t*/
        get DefaultLimitDATASoft(): Promise<number> /*t*/
        get DefaultLimitSTACK(): Promise<number> /*t*/
        get DefaultLimitSTACKSoft(): Promise<number> /*t*/
        get DefaultLimitCORE(): Promise<number> /*t*/
        get DefaultLimitCORESoft(): Promise<number> /*t*/
        get DefaultLimitRSS(): Promise<number> /*t*/
        get DefaultLimitRSSSoft(): Promise<number> /*t*/
        get DefaultLimitNOFILE(): Promise<number> /*t*/
        get DefaultLimitNOFILESoft(): Promise<number> /*t*/
        get DefaultLimitAS(): Promise<number> /*t*/
        get DefaultLimitASSoft(): Promise<number> /*t*/
        get DefaultLimitNPROC(): Promise<number> /*t*/
        get DefaultLimitNPROCSoft(): Promise<number> /*t*/
        get DefaultLimitMEMLOCK(): Promise<number> /*t*/
        get DefaultLimitMEMLOCKSoft(): Promise<number> /*t*/
        get DefaultLimitLOCKS(): Promise<number> /*t*/
        get DefaultLimitLOCKSSoft(): Promise<number> /*t*/
        get DefaultLimitSIGPENDING(): Promise<number> /*t*/
        get DefaultLimitSIGPENDINGSoft(): Promise<number> /*t*/
        get DefaultLimitMSGQUEUE(): Promise<number> /*t*/
        get DefaultLimitMSGQUEUESoft(): Promise<number> /*t*/
        get DefaultLimitNICE(): Promise<number> /*t*/
        get DefaultLimitNICESoft(): Promise<number> /*t*/
        get DefaultLimitRTPRIO(): Promise<number> /*t*/
        get DefaultLimitRTPRIOSoft(): Promise<number> /*t*/
        get DefaultLimitRTTIME(): Promise<number> /*t*/
        get DefaultLimitRTTIMESoft(): Promise<number> /*t*/
        get DefaultTasksMax(): Promise<number> /*t*/
        get TimerSlackNSec(): Promise<number> /*t*/
        get DefaultOOMPolicy(): Promise<string> /*s*/
        get DefaultOOMScoreAdjust(): Promise<number> /*i*/
        get CtrlAltDelBurstAction(): Promise<string> /*s*/
        GetUnit(name: string/*s*/): Promise<[/*unit*/ObjectPath/*o*/]>
        GetUnitByPID(pid: number/*u*/): Promise<[/*unit*/ObjectPath/*o*/]>
        GetUnitByInvocationID(invocation_id: Buffer/*ay*/): Promise<[/*unit*/ObjectPath/*o*/]>
        GetUnitByControlGroup(cgroup: string/*s*/): Promise<[/*unit*/ObjectPath/*o*/]>
        GetUnitByPIDFD(pidfd: any/*h*/): Promise<[/*unit*/ObjectPath/*o*/, /*unit_id*/string/*s*/, /*invocation_id*/Buffer/*ay*/]>
        LoadUnit(name: string/*s*/): Promise<[/*unit*/ObjectPath/*o*/]>
        StartUnit(name: string/*s*/, mode: string/*s*/): Promise<[/*job*/ObjectPath/*o*/]>
        StartUnitWithFlags(name: string/*s*/, mode: string/*s*/, flags: number/*t*/): Promise<[/*job*/ObjectPath/*o*/]>
        StartUnitReplace(old_unit: string/*s*/, new_unit: string/*s*/, mode: string/*s*/): Promise<[/*job*/ObjectPath/*o*/]>
        StopUnit(name: string/*s*/, mode: string/*s*/): Promise<[/*job*/ObjectPath/*o*/]>
        ReloadUnit(name: string/*s*/, mode: string/*s*/): Promise<[/*job*/ObjectPath/*o*/]>
        RestartUnit(name: string/*s*/, mode: string/*s*/): Promise<[/*job*/ObjectPath/*o*/]>
        TryRestartUnit(name: string/*s*/, mode: string/*s*/): Promise<[/*job*/ObjectPath/*o*/]>
        ReloadOrRestartUnit(name: string/*s*/, mode: string/*s*/): Promise<[/*job*/ObjectPath/*o*/]>
        ReloadOrTryRestartUnit(name: string/*s*/, mode: string/*s*/): Promise<[/*job*/ObjectPath/*o*/]>
        EnqueueUnitJob(name: string/*s*/, job_type: string/*s*/, job_mode: string/*s*/): Promise<[/*job_id*/number/*u*/, /*job_path*/ObjectPath/*o*/, /*unit_id*/string/*s*/, /*unit_path*/ObjectPath/*o*/, /*job_type*/string/*s*/, /*affected_jobs*/[number,ObjectPath,string,ObjectPath,string][]/*a(uosos)*/]>
        KillUnit(name: string/*s*/, whom: string/*s*/, signal: number/*i*/): Promise<[]>
        CleanUnit(name: string/*s*/, mask: string[]/*as*/): Promise<[]>
        FreezeUnit(name: string/*s*/): Promise<[]>
        ThawUnit(name: string/*s*/): Promise<[]>
        ResetFailedUnit(name: string/*s*/): Promise<[]>
        SetUnitProperties(name: string/*s*/, runtime: boolean/*b*/, properties: [string,[/*signature*/string,any]][]/*a(sv)*/): Promise<[]>
        BindMountUnit(name: string/*s*/, source: string/*s*/, destination: string/*s*/, read_only: boolean/*b*/, mkdir: boolean/*b*/): Promise<[]>
        MountImageUnit(name: string/*s*/, source: string/*s*/, destination: string/*s*/, read_only: boolean/*b*/, mkdir: boolean/*b*/, options: [string,string][]/*a(ss)*/): Promise<[]>
        RefUnit(name: string/*s*/): Promise<[]>
        UnrefUnit(name: string/*s*/): Promise<[]>
        StartTransientUnit(name: string/*s*/, mode: string/*s*/, properties: [string,[/*signature*/string,any]][]/*a(sv)*/, aux: [string,[string,[/*signature*/string,any]][]][]/*a(sa(sv))*/): Promise<[/*job*/ObjectPath/*o*/]>
        GetUnitProcesses(name: string/*s*/): Promise<[/*processes*/[string,number,string][]/*a(sus)*/]>
        AttachProcessesToUnit(unit_name: string/*s*/, subcgroup: string/*s*/, pids: number[]/*au*/): Promise<[]>
        AbandonScope(name: string/*s*/): Promise<[]>
        GetJob(id: number/*u*/): Promise<[/*job*/ObjectPath/*o*/]>
        GetJobAfter(id: number/*u*/): Promise<[/*jobs*/[number,string,string,string,ObjectPath,ObjectPath][]/*a(usssoo)*/]>
        GetJobBefore(id: number/*u*/): Promise<[/*jobs*/[number,string,string,string,ObjectPath,ObjectPath][]/*a(usssoo)*/]>
        CancelJob(id: number/*u*/): Promise<[]>
        ClearJobs(): Promise<[]>
        ResetFailed(): Promise<[]>
        SetShowStatus(mode: string/*s*/): Promise<[]>
        ListUnits(): Promise<[/*units*/[string,string,string,string,string,string,ObjectPath,number,string,ObjectPath][]/*a(ssssssouso)*/]>
        ListUnitsFiltered(states: string[]/*as*/): Promise<[/*units*/[string,string,string,string,string,string,ObjectPath,number,string,ObjectPath][]/*a(ssssssouso)*/]>
        ListUnitsByPatterns(states: string[]/*as*/, patterns: string[]/*as*/): Promise<[/*units*/[string,string,string,string,string,string,ObjectPath,number,string,ObjectPath][]/*a(ssssssouso)*/]>
        ListUnitsByNames(names: string[]/*as*/): Promise<[/*units*/[string,string,string,string,string,string,ObjectPath,number,string,ObjectPath][]/*a(ssssssouso)*/]>
        ListJobs(): Promise<[/*jobs*/[number,string,string,string,ObjectPath,ObjectPath][]/*a(usssoo)*/]>
        Subscribe(): Promise<[]>
        Unsubscribe(): Promise<[]>
        Dump(): Promise<[/*output*/string/*s*/]>
        DumpUnitsMatchingPatterns(patterns: string[]/*as*/): Promise<[/*output*/string/*s*/]>
        DumpByFileDescriptor(): Promise<[/*fd*/any/*h*/]>
        DumpUnitsMatchingPatternsByFileDescriptor(patterns: string[]/*as*/): Promise<[/*fd*/any/*h*/]>
        Reload(): Promise<[]>
        Reexecute(): Promise<[]>
        Exit(): Promise<[]>
        Reboot(): Promise<[]>
        PowerOff(): Promise<[]>
        Halt(): Promise<[]>
        KExec(): Promise<[]>
        SwitchRoot(new_root: string/*s*/, init: string/*s*/): Promise<[]>
        SetEnvironment(assignments: string[]/*as*/): Promise<[]>
        UnsetEnvironment(names: string[]/*as*/): Promise<[]>
        UnsetAndSetEnvironment(names: string[]/*as*/, assignments: string[]/*as*/): Promise<[]>
        EnqueueMarkedJobs(): Promise<[/*jobs*/ObjectPath[]/*ao*/]>
        ListUnitFiles(): Promise<[/*unit_files*/[string,string][]/*a(ss)*/]>
        ListUnitFilesByPatterns(states: string[]/*as*/, patterns: string[]/*as*/): Promise<[/*unit_files*/[string,string][]/*a(ss)*/]>
        GetUnitFileState(file: string/*s*/): Promise<[/*state*/string/*s*/]>
        EnableUnitFiles(files: string[]/*as*/, runtime: boolean/*b*/, force: boolean/*b*/): Promise<[/*carries_install_info*/boolean/*b*/, /*changes*/[string,string,string][]/*a(sss)*/]>
        DisableUnitFiles(files: string[]/*as*/, runtime: boolean/*b*/): Promise<[/*changes*/[string,string,string][]/*a(sss)*/]>
        EnableUnitFilesWithFlags(files: string[]/*as*/, flags: number/*t*/): Promise<[/*carries_install_info*/boolean/*b*/, /*changes*/[string,string,string][]/*a(sss)*/]>
        DisableUnitFilesWithFlags(files: string[]/*as*/, flags: number/*t*/): Promise<[/*changes*/[string,string,string][]/*a(sss)*/]>
        DisableUnitFilesWithFlagsAndInstallInfo(files: string[]/*as*/, flags: number/*t*/): Promise<[/*carries_install_info*/boolean/*b*/, /*changes*/[string,string,string][]/*a(sss)*/]>
        ReenableUnitFiles(files: string[]/*as*/, runtime: boolean/*b*/, force: boolean/*b*/): Promise<[/*carries_install_info*/boolean/*b*/, /*changes*/[string,string,string][]/*a(sss)*/]>
        LinkUnitFiles(files: string[]/*as*/, runtime: boolean/*b*/, force: boolean/*b*/): Promise<[/*changes*/[string,string,string][]/*a(sss)*/]>
        PresetUnitFiles(files: string[]/*as*/, runtime: boolean/*b*/, force: boolean/*b*/): Promise<[/*carries_install_info*/boolean/*b*/, /*changes*/[string,string,string][]/*a(sss)*/]>
        PresetUnitFilesWithMode(files: string[]/*as*/, mode: string/*s*/, runtime: boolean/*b*/, force: boolean/*b*/): Promise<[/*carries_install_info*/boolean/*b*/, /*changes*/[string,string,string][]/*a(sss)*/]>
        MaskUnitFiles(files: string[]/*as*/, runtime: boolean/*b*/, force: boolean/*b*/): Promise<[/*changes*/[string,string,string][]/*a(sss)*/]>
        UnmaskUnitFiles(files: string[]/*as*/, runtime: boolean/*b*/): Promise<[/*changes*/[string,string,string][]/*a(sss)*/]>
        RevertUnitFiles(files: string[]/*as*/): Promise<[/*changes*/[string,string,string][]/*a(sss)*/]>
        SetDefaultTarget(name: string/*s*/, force: boolean/*b*/): Promise<[/*changes*/[string,string,string][]/*a(sss)*/]>
        GetDefaultTarget(): Promise<[/*name*/string/*s*/]>
        PresetAllUnitFiles(mode: string/*s*/, runtime: boolean/*b*/, force: boolean/*b*/): Promise<[/*changes*/[string,string,string][]/*a(sss)*/]>
        AddDependencyUnitFiles(files: string[]/*as*/, target: string/*s*/, type: string/*s*/, runtime: boolean/*b*/, force: boolean/*b*/): Promise<[/*changes*/[string,string,string][]/*a(sss)*/]>
        GetUnitFileLinks(name: string/*s*/, runtime: boolean/*b*/): Promise<[/*links*/string[]/*as*/]>
        SetExitCode(number: number/*y*/): Promise<[]>
        LookupDynamicUserByName(name: string/*s*/): Promise<[/*uid*/number/*u*/]>
        LookupDynamicUserByUID(uid: number/*u*/): Promise<[/*name*/string/*s*/]>
        GetDynamicUsers(): Promise<[/*users*/[number,string][]/*a(us)*/]>
      }
      export interface Service {
        get Type(): Promise<string> /*s*/
        get ExitType(): Promise<string> /*s*/
        get Restart(): Promise<string> /*s*/
        get PIDFile(): Promise<string> /*s*/
        get NotifyAccess(): Promise<string> /*s*/
        get RestartUSec(): Promise<number> /*t*/
        get TimeoutStartUSec(): Promise<number> /*t*/
        get TimeoutStopUSec(): Promise<number> /*t*/
        get TimeoutAbortUSec(): Promise<number> /*t*/
        get TimeoutStartFailureMode(): Promise<string> /*s*/
        get TimeoutStopFailureMode(): Promise<string> /*s*/
        get RuntimeMaxUSec(): Promise<number> /*t*/
        get RuntimeRandomizedExtraUSec(): Promise<number> /*t*/
        get WatchdogUSec(): Promise<number> /*t*/
        get WatchdogTimestamp(): Promise<number> /*t*/
        get WatchdogTimestampMonotonic(): Promise<number> /*t*/
        get RootDirectoryStartOnly(): Promise<boolean> /*b*/
        get RemainAfterExit(): Promise<boolean> /*b*/
        get GuessMainPID(): Promise<boolean> /*b*/
        get RestartPreventExitStatus(): Promise<[number[],number[]]> /*(aiai)*/
        get RestartForceExitStatus(): Promise<[number[],number[]]> /*(aiai)*/
        get SuccessExitStatus(): Promise<[number[],number[]]> /*(aiai)*/
        get MainPID(): Promise<number> /*u*/
        get ControlPID(): Promise<number> /*u*/
        get BusName(): Promise<string> /*s*/
        get FileDescriptorStoreMax(): Promise<number> /*u*/
        get NFileDescriptorStore(): Promise<number> /*u*/
        get StatusText(): Promise<string> /*s*/
        get StatusErrno(): Promise<number> /*i*/
        get Result(): Promise<string> /*s*/
        get ReloadResult(): Promise<string> /*s*/
        get CleanResult(): Promise<string> /*s*/
        get USBFunctionDescriptors(): Promise<string> /*s*/
        get USBFunctionStrings(): Promise<string> /*s*/
        get UID(): Promise<number> /*u*/
        get GID(): Promise<number> /*u*/
        get NRestarts(): Promise<number> /*u*/
        get OOMPolicy(): Promise<string> /*s*/
        get OpenFile(): Promise<[string,string,number][]> /*a(sst)*/
        get ReloadSignal(): Promise<number> /*i*/
        get ExecMainStartTimestamp(): Promise<number> /*t*/
        get ExecMainStartTimestampMonotonic(): Promise<number> /*t*/
        get ExecMainExitTimestamp(): Promise<number> /*t*/
        get ExecMainExitTimestampMonotonic(): Promise<number> /*t*/
        get ExecMainPID(): Promise<number> /*u*/
        get ExecMainCode(): Promise<number> /*i*/
        get ExecMainStatus(): Promise<number> /*i*/
        get ExecCondition(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]> /*a(sasbttttuii)*/
        get ExecConditionEx(): Promise<[string,string[],string[],number,number,number,number,number,number,number][]> /*a(sasasttttuii)*/
        get ExecStartPre(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]> /*a(sasbttttuii)*/
        get ExecStartPreEx(): Promise<[string,string[],string[],number,number,number,number,number,number,number][]> /*a(sasasttttuii)*/
        get ExecStart(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]> /*a(sasbttttuii)*/
        get ExecStartEx(): Promise<[string,string[],string[],number,number,number,number,number,number,number][]> /*a(sasasttttuii)*/
        get ExecStartPost(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]> /*a(sasbttttuii)*/
        get ExecStartPostEx(): Promise<[string,string[],string[],number,number,number,number,number,number,number][]> /*a(sasasttttuii)*/
        get ExecReload(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]> /*a(sasbttttuii)*/
        get ExecReloadEx(): Promise<[string,string[],string[],number,number,number,number,number,number,number][]> /*a(sasasttttuii)*/
        get ExecStop(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]> /*a(sasbttttuii)*/
        get ExecStopEx(): Promise<[string,string[],string[],number,number,number,number,number,number,number][]> /*a(sasasttttuii)*/
        get ExecStopPost(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]> /*a(sasbttttuii)*/
        get ExecStopPostEx(): Promise<[string,string[],string[],number,number,number,number,number,number,number][]> /*a(sasasttttuii)*/
        get Slice(): Promise<string> /*s*/
        get ControlGroup(): Promise<string> /*s*/
        get ControlGroupId(): Promise<number> /*t*/
        get MemoryCurrent(): Promise<number> /*t*/
        get MemoryAvailable(): Promise<number> /*t*/
        get CPUUsageNSec(): Promise<number> /*t*/
        get EffectiveCPUs(): Promise<Buffer> /*ay*/
        get EffectiveMemoryNodes(): Promise<Buffer> /*ay*/
        get TasksCurrent(): Promise<number> /*t*/
        get IPIngressBytes(): Promise<number> /*t*/
        get IPIngressPackets(): Promise<number> /*t*/
        get IPEgressBytes(): Promise<number> /*t*/
        get IPEgressPackets(): Promise<number> /*t*/
        get IOReadBytes(): Promise<number> /*t*/
        get IOReadOperations(): Promise<number> /*t*/
        get IOWriteBytes(): Promise<number> /*t*/
        get IOWriteOperations(): Promise<number> /*t*/
        get Delegate(): Promise<boolean> /*b*/
        get DelegateControllers(): Promise<string[]> /*as*/
        get CPUAccounting(): Promise<boolean> /*b*/
        get CPUWeight(): Promise<number> /*t*/
        get StartupCPUWeight(): Promise<number> /*t*/
        get CPUShares(): Promise<number> /*t*/
        get StartupCPUShares(): Promise<number> /*t*/
        get CPUQuotaPerSecUSec(): Promise<number> /*t*/
        get CPUQuotaPeriodUSec(): Promise<number> /*t*/
        get AllowedCPUs(): Promise<Buffer> /*ay*/
        get StartupAllowedCPUs(): Promise<Buffer> /*ay*/
        get AllowedMemoryNodes(): Promise<Buffer> /*ay*/
        get StartupAllowedMemoryNodes(): Promise<Buffer> /*ay*/
        get IOAccounting(): Promise<boolean> /*b*/
        get IOWeight(): Promise<number> /*t*/
        get StartupIOWeight(): Promise<number> /*t*/
        get IODeviceWeight(): Promise<[string,number][]> /*a(st)*/
        get IOReadBandwidthMax(): Promise<[string,number][]> /*a(st)*/
        get IOWriteBandwidthMax(): Promise<[string,number][]> /*a(st)*/
        get IOReadIOPSMax(): Promise<[string,number][]> /*a(st)*/
        get IOWriteIOPSMax(): Promise<[string,number][]> /*a(st)*/
        get IODeviceLatencyTargetUSec(): Promise<[string,number][]> /*a(st)*/
        get BlockIOAccounting(): Promise<boolean> /*b*/
        get BlockIOWeight(): Promise<number> /*t*/
        get StartupBlockIOWeight(): Promise<number> /*t*/
        get BlockIODeviceWeight(): Promise<[string,number][]> /*a(st)*/
        get BlockIOReadBandwidth(): Promise<[string,number][]> /*a(st)*/
        get BlockIOWriteBandwidth(): Promise<[string,number][]> /*a(st)*/
        get MemoryAccounting(): Promise<boolean> /*b*/
        get DefaultMemoryLow(): Promise<number> /*t*/
        get DefaultMemoryMin(): Promise<number> /*t*/
        get MemoryMin(): Promise<number> /*t*/
        get MemoryLow(): Promise<number> /*t*/
        get MemoryHigh(): Promise<number> /*t*/
        get MemoryMax(): Promise<number> /*t*/
        get MemorySwapMax(): Promise<number> /*t*/
        get MemoryZSwapMax(): Promise<number> /*t*/
        get MemoryLimit(): Promise<number> /*t*/
        get DevicePolicy(): Promise<string> /*s*/
        get DeviceAllow(): Promise<[string,string][]> /*a(ss)*/
        get TasksAccounting(): Promise<boolean> /*b*/
        get TasksMax(): Promise<number> /*t*/
        get IPAccounting(): Promise<boolean> /*b*/
        get IPAddressAllow(): Promise<[number,Buffer,number][]> /*a(iayu)*/
        get IPAddressDeny(): Promise<[number,Buffer,number][]> /*a(iayu)*/
        get IPIngressFilterPath(): Promise<string[]> /*as*/
        get IPEgressFilterPath(): Promise<string[]> /*as*/
        get DisableControllers(): Promise<string[]> /*as*/
        get ManagedOOMSwap(): Promise<string> /*s*/
        get ManagedOOMMemoryPressure(): Promise<string> /*s*/
        get ManagedOOMMemoryPressureLimit(): Promise<number> /*u*/
        get ManagedOOMPreference(): Promise<string> /*s*/
        get BPFProgram(): Promise<[string,string][]> /*a(ss)*/
        get SocketBindAllow(): Promise<[number,number,number,number][]> /*a(iiqq)*/
        get SocketBindDeny(): Promise<[number,number,number,number][]> /*a(iiqq)*/
        get RestrictNetworkInterfaces(): Promise<[boolean,string[]]> /*(bas)*/
        get Environment(): Promise<string[]> /*as*/
        get EnvironmentFiles(): Promise<[string,boolean][]> /*a(sb)*/
        get PassEnvironment(): Promise<string[]> /*as*/
        get UnsetEnvironment(): Promise<string[]> /*as*/
        get UMask(): Promise<number> /*u*/
        get LimitCPU(): Promise<number> /*t*/
        get LimitCPUSoft(): Promise<number> /*t*/
        get LimitFSIZE(): Promise<number> /*t*/
        get LimitFSIZESoft(): Promise<number> /*t*/
        get LimitDATA(): Promise<number> /*t*/
        get LimitDATASoft(): Promise<number> /*t*/
        get LimitSTACK(): Promise<number> /*t*/
        get LimitSTACKSoft(): Promise<number> /*t*/
        get LimitCORE(): Promise<number> /*t*/
        get LimitCORESoft(): Promise<number> /*t*/
        get LimitRSS(): Promise<number> /*t*/
        get LimitRSSSoft(): Promise<number> /*t*/
        get LimitNOFILE(): Promise<number> /*t*/
        get LimitNOFILESoft(): Promise<number> /*t*/
        get LimitAS(): Promise<number> /*t*/
        get LimitASSoft(): Promise<number> /*t*/
        get LimitNPROC(): Promise<number> /*t*/
        get LimitNPROCSoft(): Promise<number> /*t*/
        get LimitMEMLOCK(): Promise<number> /*t*/
        get LimitMEMLOCKSoft(): Promise<number> /*t*/
        get LimitLOCKS(): Promise<number> /*t*/
        get LimitLOCKSSoft(): Promise<number> /*t*/
        get LimitSIGPENDING(): Promise<number> /*t*/
        get LimitSIGPENDINGSoft(): Promise<number> /*t*/
        get LimitMSGQUEUE(): Promise<number> /*t*/
        get LimitMSGQUEUESoft(): Promise<number> /*t*/
        get LimitNICE(): Promise<number> /*t*/
        get LimitNICESoft(): Promise<number> /*t*/
        get LimitRTPRIO(): Promise<number> /*t*/
        get LimitRTPRIOSoft(): Promise<number> /*t*/
        get LimitRTTIME(): Promise<number> /*t*/
        get LimitRTTIMESoft(): Promise<number> /*t*/
        get WorkingDirectory(): Promise<string> /*s*/
        get RootDirectory(): Promise<string> /*s*/
        get RootImage(): Promise<string> /*s*/
        get RootImageOptions(): Promise<[string,string][]> /*a(ss)*/
        get RootHash(): Promise<Buffer> /*ay*/
        get RootHashPath(): Promise<string> /*s*/
        get RootHashSignature(): Promise<Buffer> /*ay*/
        get RootHashSignaturePath(): Promise<string> /*s*/
        get RootVerity(): Promise<string> /*s*/
        get ExtensionDirectories(): Promise<string[]> /*as*/
        get ExtensionImages(): Promise<[string,boolean,[string,string][]][]> /*a(sba(ss))*/
        get MountImages(): Promise<[string,string,boolean,[string,string][]][]> /*a(ssba(ss))*/
        get OOMScoreAdjust(): Promise<number> /*i*/
        get CoredumpFilter(): Promise<number> /*t*/
        get Nice(): Promise<number> /*i*/
        get IOSchedulingClass(): Promise<number> /*i*/
        get IOSchedulingPriority(): Promise<number> /*i*/
        get CPUSchedulingPolicy(): Promise<number> /*i*/
        get CPUSchedulingPriority(): Promise<number> /*i*/
        get CPUAffinity(): Promise<Buffer> /*ay*/
        get CPUAffinityFromNUMA(): Promise<boolean> /*b*/
        get NUMAPolicy(): Promise<number> /*i*/
        get NUMAMask(): Promise<Buffer> /*ay*/
        get TimerSlackNSec(): Promise<number> /*t*/
        get CPUSchedulingResetOnFork(): Promise<boolean> /*b*/
        get NonBlocking(): Promise<boolean> /*b*/
        get StandardInput(): Promise<string> /*s*/
        get StandardInputFileDescriptorName(): Promise<string> /*s*/
        get StandardInputData(): Promise<Buffer> /*ay*/
        get StandardOutput(): Promise<string> /*s*/
        get StandardOutputFileDescriptorName(): Promise<string> /*s*/
        get StandardError(): Promise<string> /*s*/
        get StandardErrorFileDescriptorName(): Promise<string> /*s*/
        get TTYPath(): Promise<string> /*s*/
        get TTYReset(): Promise<boolean> /*b*/
        get TTYVHangup(): Promise<boolean> /*b*/
        get TTYVTDisallocate(): Promise<boolean> /*b*/
        get TTYRows(): Promise<number> /*q*/
        get TTYColumns(): Promise<number> /*q*/
        get SyslogPriority(): Promise<number> /*i*/
        get SyslogIdentifier(): Promise<string> /*s*/
        get SyslogLevelPrefix(): Promise<boolean> /*b*/
        get SyslogLevel(): Promise<number> /*i*/
        get SyslogFacility(): Promise<number> /*i*/
        get LogLevelMax(): Promise<number> /*i*/
        get LogRateLimitIntervalUSec(): Promise<number> /*t*/
        get LogRateLimitBurst(): Promise<number> /*u*/
        get LogExtraFields(): Promise<Buffer[]> /*aay*/
        get LogFilterPatterns(): Promise<[boolean,string][]> /*a(bs)*/
        get LogNamespace(): Promise<string> /*s*/
        get SecureBits(): Promise<number> /*i*/
        get CapabilityBoundingSet(): Promise<number> /*t*/
        get AmbientCapabilities(): Promise<number> /*t*/
        get User(): Promise<string> /*s*/
        get Group(): Promise<string> /*s*/
        get DynamicUser(): Promise<boolean> /*b*/
        get RemoveIPC(): Promise<boolean> /*b*/
        get SetCredential(): Promise<[string,Buffer][]> /*a(say)*/
        get SetCredentialEncrypted(): Promise<[string,Buffer][]> /*a(say)*/
        get LoadCredential(): Promise<[string,string][]> /*a(ss)*/
        get LoadCredentialEncrypted(): Promise<[string,string][]> /*a(ss)*/
        get SupplementaryGroups(): Promise<string[]> /*as*/
        get PAMName(): Promise<string> /*s*/
        get ReadWritePaths(): Promise<string[]> /*as*/
        get ReadOnlyPaths(): Promise<string[]> /*as*/
        get InaccessiblePaths(): Promise<string[]> /*as*/
        get ExecPaths(): Promise<string[]> /*as*/
        get NoExecPaths(): Promise<string[]> /*as*/
        get ExecSearchPath(): Promise<string[]> /*as*/
        get MountFlags(): Promise<number> /*t*/
        get PrivateTmp(): Promise<boolean> /*b*/
        get PrivateDevices(): Promise<boolean> /*b*/
        get ProtectClock(): Promise<boolean> /*b*/
        get ProtectKernelTunables(): Promise<boolean> /*b*/
        get ProtectKernelModules(): Promise<boolean> /*b*/
        get ProtectKernelLogs(): Promise<boolean> /*b*/
        get ProtectControlGroups(): Promise<boolean> /*b*/
        get PrivateNetwork(): Promise<boolean> /*b*/
        get PrivateUsers(): Promise<boolean> /*b*/
        get PrivateMounts(): Promise<boolean> /*b*/
        get PrivateIPC(): Promise<boolean> /*b*/
        get ProtectHome(): Promise<string> /*s*/
        get ProtectSystem(): Promise<string> /*s*/
        get SameProcessGroup(): Promise<boolean> /*b*/
        get UtmpIdentifier(): Promise<string> /*s*/
        get UtmpMode(): Promise<string> /*s*/
        get SELinuxContext(): Promise<[boolean,string]> /*(bs)*/
        get AppArmorProfile(): Promise<[boolean,string]> /*(bs)*/
        get SmackProcessLabel(): Promise<[boolean,string]> /*(bs)*/
        get IgnoreSIGPIPE(): Promise<boolean> /*b*/
        get NoNewPrivileges(): Promise<boolean> /*b*/
        get SystemCallFilter(): Promise<[boolean,string[]]> /*(bas)*/
        get SystemCallArchitectures(): Promise<string[]> /*as*/
        get SystemCallErrorNumber(): Promise<number> /*i*/
        get SystemCallLog(): Promise<[boolean,string[]]> /*(bas)*/
        get Personality(): Promise<string> /*s*/
        get LockPersonality(): Promise<boolean> /*b*/
        get RestrictAddressFamilies(): Promise<[boolean,string[]]> /*(bas)*/
        get RuntimeDirectorySymlink(): Promise<[string,string,number][]> /*a(sst)*/
        get RuntimeDirectoryPreserve(): Promise<string> /*s*/
        get RuntimeDirectoryMode(): Promise<number> /*u*/
        get RuntimeDirectory(): Promise<string[]> /*as*/
        get StateDirectorySymlink(): Promise<[string,string,number][]> /*a(sst)*/
        get StateDirectoryMode(): Promise<number> /*u*/
        get StateDirectory(): Promise<string[]> /*as*/
        get CacheDirectorySymlink(): Promise<[string,string,number][]> /*a(sst)*/
        get CacheDirectoryMode(): Promise<number> /*u*/
        get CacheDirectory(): Promise<string[]> /*as*/
        get LogsDirectorySymlink(): Promise<[string,string,number][]> /*a(sst)*/
        get LogsDirectoryMode(): Promise<number> /*u*/
        get LogsDirectory(): Promise<string[]> /*as*/
        get ConfigurationDirectoryMode(): Promise<number> /*u*/
        get ConfigurationDirectory(): Promise<string[]> /*as*/
        get TimeoutCleanUSec(): Promise<number> /*t*/
        get MemoryDenyWriteExecute(): Promise<boolean> /*b*/
        get RestrictRealtime(): Promise<boolean> /*b*/
        get RestrictSUIDSGID(): Promise<boolean> /*b*/
        get RestrictNamespaces(): Promise<number> /*t*/
        get RestrictFileSystems(): Promise<[boolean,string[]]> /*(bas)*/
        get BindPaths(): Promise<[string,string,boolean,number][]> /*a(ssbt)*/
        get BindReadOnlyPaths(): Promise<[string,string,boolean,number][]> /*a(ssbt)*/
        get TemporaryFileSystem(): Promise<[string,string][]> /*a(ss)*/
        get MountAPIVFS(): Promise<boolean> /*b*/
        get KeyringMode(): Promise<string> /*s*/
        get ProtectProc(): Promise<string> /*s*/
        get ProcSubset(): Promise<string> /*s*/
        get ProtectHostname(): Promise<boolean> /*b*/
        get NetworkNamespacePath(): Promise<string> /*s*/
        get IPCNamespacePath(): Promise<string> /*s*/
        get KillMode(): Promise<string> /*s*/
        get KillSignal(): Promise<number> /*i*/
        get RestartKillSignal(): Promise<number> /*i*/
        get FinalKillSignal(): Promise<number> /*i*/
        get SendSIGKILL(): Promise<boolean> /*b*/
        get SendSIGHUP(): Promise<boolean> /*b*/
        get WatchdogSignal(): Promise<number> /*i*/
        BindMount(source: string/*s*/, destination: string/*s*/, read_only: boolean/*b*/, mkdir: boolean/*b*/): Promise<[]>
        MountImage(source: string/*s*/, destination: string/*s*/, read_only: boolean/*b*/, mkdir: boolean/*b*/, options: [string,string][]/*a(ss)*/): Promise<[]>
        GetProcesses(): Promise<[/*processes*/[string,number,string][]/*a(sus)*/]>
        AttachProcesses(subcgroup: string/*s*/, pids: number[]/*au*/): Promise<[]>
      }
      export interface Unit {
        get Id(): Promise<string> /*s*/
        get Names(): Promise<string[]> /*as*/
        get Following(): Promise<string> /*s*/
        get Requires(): Promise<string[]> /*as*/
        get Requisite(): Promise<string[]> /*as*/
        get Wants(): Promise<string[]> /*as*/
        get BindsTo(): Promise<string[]> /*as*/
        get PartOf(): Promise<string[]> /*as*/
        get Upholds(): Promise<string[]> /*as*/
        get RequiredBy(): Promise<string[]> /*as*/
        get RequisiteOf(): Promise<string[]> /*as*/
        get WantedBy(): Promise<string[]> /*as*/
        get BoundBy(): Promise<string[]> /*as*/
        get UpheldBy(): Promise<string[]> /*as*/
        get ConsistsOf(): Promise<string[]> /*as*/
        get Conflicts(): Promise<string[]> /*as*/
        get ConflictedBy(): Promise<string[]> /*as*/
        get Before(): Promise<string[]> /*as*/
        get After(): Promise<string[]> /*as*/
        get OnSuccess(): Promise<string[]> /*as*/
        get OnSuccessOf(): Promise<string[]> /*as*/
        get OnFailure(): Promise<string[]> /*as*/
        get OnFailureOf(): Promise<string[]> /*as*/
        get Triggers(): Promise<string[]> /*as*/
        get TriggeredBy(): Promise<string[]> /*as*/
        get PropagatesReloadTo(): Promise<string[]> /*as*/
        get ReloadPropagatedFrom(): Promise<string[]> /*as*/
        get PropagatesStopTo(): Promise<string[]> /*as*/
        get StopPropagatedFrom(): Promise<string[]> /*as*/
        get JoinsNamespaceOf(): Promise<string[]> /*as*/
        get SliceOf(): Promise<string[]> /*as*/
        get RequiresMountsFor(): Promise<string[]> /*as*/
        get Documentation(): Promise<string[]> /*as*/
        get Description(): Promise<string> /*s*/
        get AccessSELinuxContext(): Promise<string> /*s*/
        get LoadState(): Promise<string> /*s*/
        get ActiveState(): Promise<string> /*s*/
        get FreezerState(): Promise<string> /*s*/
        get SubState(): Promise<string> /*s*/
        get FragmentPath(): Promise<string> /*s*/
        get SourcePath(): Promise<string> /*s*/
        get DropInPaths(): Promise<string[]> /*as*/
        get UnitFileState(): Promise<string> /*s*/
        get UnitFilePreset(): Promise<string> /*s*/
        get StateChangeTimestamp(): Promise<number> /*t*/
        get StateChangeTimestampMonotonic(): Promise<number> /*t*/
        get InactiveExitTimestamp(): Promise<number> /*t*/
        get InactiveExitTimestampMonotonic(): Promise<number> /*t*/
        get ActiveEnterTimestamp(): Promise<number> /*t*/
        get ActiveEnterTimestampMonotonic(): Promise<number> /*t*/
        get ActiveExitTimestamp(): Promise<number> /*t*/
        get ActiveExitTimestampMonotonic(): Promise<number> /*t*/
        get InactiveEnterTimestamp(): Promise<number> /*t*/
        get InactiveEnterTimestampMonotonic(): Promise<number> /*t*/
        get CanStart(): Promise<boolean> /*b*/
        get CanStop(): Promise<boolean> /*b*/
        get CanReload(): Promise<boolean> /*b*/
        get CanIsolate(): Promise<boolean> /*b*/
        get CanClean(): Promise<string[]> /*as*/
        get CanFreeze(): Promise<boolean> /*b*/
        get Job(): Promise<[number,ObjectPath]> /*(uo)*/
        get StopWhenUnneeded(): Promise<boolean> /*b*/
        get RefuseManualStart(): Promise<boolean> /*b*/
        get RefuseManualStop(): Promise<boolean> /*b*/
        get AllowIsolate(): Promise<boolean> /*b*/
        get DefaultDependencies(): Promise<boolean> /*b*/
        get OnSuccessJobMode(): Promise<string> /*s*/
        get OnFailureJobMode(): Promise<string> /*s*/
        get IgnoreOnIsolate(): Promise<boolean> /*b*/
        get NeedDaemonReload(): Promise<boolean> /*b*/
        get Markers(): Promise<string[]> /*as*/
        get JobTimeoutUSec(): Promise<number> /*t*/
        get JobRunningTimeoutUSec(): Promise<number> /*t*/
        get JobTimeoutAction(): Promise<string> /*s*/
        get JobTimeoutRebootArgument(): Promise<string> /*s*/
        get ConditionResult(): Promise<boolean> /*b*/
        get AssertResult(): Promise<boolean> /*b*/
        get ConditionTimestamp(): Promise<number> /*t*/
        get ConditionTimestampMonotonic(): Promise<number> /*t*/
        get AssertTimestamp(): Promise<number> /*t*/
        get AssertTimestampMonotonic(): Promise<number> /*t*/
        get Conditions(): Promise<[string,boolean,boolean,string,number][]> /*a(sbbsi)*/
        get Asserts(): Promise<[string,boolean,boolean,string,number][]> /*a(sbbsi)*/
        get LoadError(): Promise<[string,string]> /*(ss)*/
        get Transient(): Promise<boolean> /*b*/
        get Perpetual(): Promise<boolean> /*b*/
        get StartLimitIntervalUSec(): Promise<number> /*t*/
        get StartLimitBurst(): Promise<number> /*u*/
        get StartLimitAction(): Promise<string> /*s*/
        get FailureAction(): Promise<string> /*s*/
        get FailureActionExitStatus(): Promise<number> /*i*/
        get SuccessAction(): Promise<string> /*s*/
        get SuccessActionExitStatus(): Promise<number> /*i*/
        get RebootArgument(): Promise<string> /*s*/
        get InvocationID(): Promise<Buffer> /*ay*/
        get CollectMode(): Promise<string> /*s*/
        get Refs(): Promise<string[]> /*as*/
        get ActivationDetails(): Promise<[string,string][]> /*a(ss)*/
        Start(mode: string/*s*/): Promise<[/*job*/ObjectPath/*o*/]>
        Stop(mode: string/*s*/): Promise<[/*job*/ObjectPath/*o*/]>
        Reload(mode: string/*s*/): Promise<[/*job*/ObjectPath/*o*/]>
        Restart(mode: string/*s*/): Promise<[/*job*/ObjectPath/*o*/]>
        TryRestart(mode: string/*s*/): Promise<[/*job*/ObjectPath/*o*/]>
        ReloadOrRestart(mode: string/*s*/): Promise<[/*job*/ObjectPath/*o*/]>
        ReloadOrTryRestart(mode: string/*s*/): Promise<[/*job*/ObjectPath/*o*/]>
        EnqueueJob(job_type: string/*s*/, job_mode: string/*s*/): Promise<[/*job_id*/number/*u*/, /*job_path*/ObjectPath/*o*/, /*unit_id*/string/*s*/, /*unit_path*/ObjectPath/*o*/, /*job_type*/string/*s*/, /*affected_jobs*/[number,ObjectPath,string,ObjectPath,string][]/*a(uosos)*/]>
        Kill(whom: string/*s*/, signal: number/*i*/): Promise<[]>
        ResetFailed(): Promise<[]>
        SetProperties(runtime: boolean/*b*/, properties: [string,[/*signature*/string,any]][]/*a(sv)*/): Promise<[]>
        Ref(): Promise<[]>
        Unref(): Promise<[]>
        Clean(mask: string[]/*as*/): Promise<[]>
        Freeze(): Promise<[]>
        Thaw(): Promise<[]>
      }
      export interface Device {
        get SysFSPath(): Promise<string> /*s*/
      }
      export interface Target {
      }
      export interface Timer {
        get Unit(): Promise<string> /*s*/
        get TimersMonotonic(): Promise<[string,number,number][]> /*a(stt)*/
        get TimersCalendar(): Promise<[string,string,number][]> /*a(sst)*/
        get OnClockChange(): Promise<boolean> /*b*/
        get OnTimezoneChange(): Promise<boolean> /*b*/
        get NextElapseUSecRealtime(): Promise<number> /*t*/
        get NextElapseUSecMonotonic(): Promise<number> /*t*/
        get LastTriggerUSec(): Promise<number> /*t*/
        get LastTriggerUSecMonotonic(): Promise<number> /*t*/
        get Result(): Promise<string> /*s*/
        get AccuracyUSec(): Promise<number> /*t*/
        get RandomizedDelayUSec(): Promise<number> /*t*/
        get FixedRandomDelay(): Promise<boolean> /*b*/
        get Persistent(): Promise<boolean> /*b*/
        get WakeSystem(): Promise<boolean> /*b*/
        get RemainAfterElapse(): Promise<boolean> /*b*/
      }
      export interface Socket {
        get BindIPv6Only(): Promise<string> /*s*/
        get Backlog(): Promise<number> /*u*/
        get TimeoutUSec(): Promise<number> /*t*/
        get BindToDevice(): Promise<string> /*s*/
        get SocketUser(): Promise<string> /*s*/
        get SocketGroup(): Promise<string> /*s*/
        get SocketMode(): Promise<number> /*u*/
        get DirectoryMode(): Promise<number> /*u*/
        get Accept(): Promise<boolean> /*b*/
        get FlushPending(): Promise<boolean> /*b*/
        get Writable(): Promise<boolean> /*b*/
        get KeepAlive(): Promise<boolean> /*b*/
        get KeepAliveTimeUSec(): Promise<number> /*t*/
        get KeepAliveIntervalUSec(): Promise<number> /*t*/
        get KeepAliveProbes(): Promise<number> /*u*/
        get DeferAcceptUSec(): Promise<number> /*t*/
        get NoDelay(): Promise<boolean> /*b*/
        get Priority(): Promise<number> /*i*/
        get ReceiveBuffer(): Promise<number> /*t*/
        get SendBuffer(): Promise<number> /*t*/
        get IPTOS(): Promise<number> /*i*/
        get IPTTL(): Promise<number> /*i*/
        get PipeSize(): Promise<number> /*t*/
        get FreeBind(): Promise<boolean> /*b*/
        get Transparent(): Promise<boolean> /*b*/
        get Broadcast(): Promise<boolean> /*b*/
        get PassCredentials(): Promise<boolean> /*b*/
        get PassSecurity(): Promise<boolean> /*b*/
        get PassPacketInfo(): Promise<boolean> /*b*/
        get Timestamping(): Promise<string> /*s*/
        get RemoveOnStop(): Promise<boolean> /*b*/
        get Listen(): Promise<[string,string][]> /*a(ss)*/
        get Symlinks(): Promise<string[]> /*as*/
        get Mark(): Promise<number> /*i*/
        get MaxConnections(): Promise<number> /*u*/
        get MaxConnectionsPerSource(): Promise<number> /*u*/
        get MessageQueueMaxMessages(): Promise<number> /*x*/
        get MessageQueueMessageSize(): Promise<number> /*x*/
        get TCPCongestion(): Promise<string> /*s*/
        get ReusePort(): Promise<boolean> /*b*/
        get SmackLabel(): Promise<string> /*s*/
        get SmackLabelIPIn(): Promise<string> /*s*/
        get SmackLabelIPOut(): Promise<string> /*s*/
        get ControlPID(): Promise<number> /*u*/
        get Result(): Promise<string> /*s*/
        get NConnections(): Promise<number> /*u*/
        get NAccepted(): Promise<number> /*u*/
        get NRefused(): Promise<number> /*u*/
        get FileDescriptorName(): Promise<string> /*s*/
        get SocketProtocol(): Promise<number> /*i*/
        get TriggerLimitIntervalUSec(): Promise<number> /*t*/
        get TriggerLimitBurst(): Promise<number> /*u*/
        get UID(): Promise<number> /*u*/
        get GID(): Promise<number> /*u*/
        get ExecStartPre(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]> /*a(sasbttttuii)*/
        get ExecStartPost(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]> /*a(sasbttttuii)*/
        get ExecStopPre(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]> /*a(sasbttttuii)*/
        get ExecStopPost(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]> /*a(sasbttttuii)*/
        get Slice(): Promise<string> /*s*/
        get ControlGroup(): Promise<string> /*s*/
        get ControlGroupId(): Promise<number> /*t*/
        get MemoryCurrent(): Promise<number> /*t*/
        get MemoryAvailable(): Promise<number> /*t*/
        get CPUUsageNSec(): Promise<number> /*t*/
        get EffectiveCPUs(): Promise<Buffer> /*ay*/
        get EffectiveMemoryNodes(): Promise<Buffer> /*ay*/
        get TasksCurrent(): Promise<number> /*t*/
        get IPIngressBytes(): Promise<number> /*t*/
        get IPIngressPackets(): Promise<number> /*t*/
        get IPEgressBytes(): Promise<number> /*t*/
        get IPEgressPackets(): Promise<number> /*t*/
        get IOReadBytes(): Promise<number> /*t*/
        get IOReadOperations(): Promise<number> /*t*/
        get IOWriteBytes(): Promise<number> /*t*/
        get IOWriteOperations(): Promise<number> /*t*/
        get Delegate(): Promise<boolean> /*b*/
        get DelegateControllers(): Promise<string[]> /*as*/
        get CPUAccounting(): Promise<boolean> /*b*/
        get CPUWeight(): Promise<number> /*t*/
        get StartupCPUWeight(): Promise<number> /*t*/
        get CPUShares(): Promise<number> /*t*/
        get StartupCPUShares(): Promise<number> /*t*/
        get CPUQuotaPerSecUSec(): Promise<number> /*t*/
        get CPUQuotaPeriodUSec(): Promise<number> /*t*/
        get AllowedCPUs(): Promise<Buffer> /*ay*/
        get StartupAllowedCPUs(): Promise<Buffer> /*ay*/
        get AllowedMemoryNodes(): Promise<Buffer> /*ay*/
        get StartupAllowedMemoryNodes(): Promise<Buffer> /*ay*/
        get IOAccounting(): Promise<boolean> /*b*/
        get IOWeight(): Promise<number> /*t*/
        get StartupIOWeight(): Promise<number> /*t*/
        get IODeviceWeight(): Promise<[string,number][]> /*a(st)*/
        get IOReadBandwidthMax(): Promise<[string,number][]> /*a(st)*/
        get IOWriteBandwidthMax(): Promise<[string,number][]> /*a(st)*/
        get IOReadIOPSMax(): Promise<[string,number][]> /*a(st)*/
        get IOWriteIOPSMax(): Promise<[string,number][]> /*a(st)*/
        get IODeviceLatencyTargetUSec(): Promise<[string,number][]> /*a(st)*/
        get BlockIOAccounting(): Promise<boolean> /*b*/
        get BlockIOWeight(): Promise<number> /*t*/
        get StartupBlockIOWeight(): Promise<number> /*t*/
        get BlockIODeviceWeight(): Promise<[string,number][]> /*a(st)*/
        get BlockIOReadBandwidth(): Promise<[string,number][]> /*a(st)*/
        get BlockIOWriteBandwidth(): Promise<[string,number][]> /*a(st)*/
        get MemoryAccounting(): Promise<boolean> /*b*/
        get DefaultMemoryLow(): Promise<number> /*t*/
        get DefaultMemoryMin(): Promise<number> /*t*/
        get MemoryMin(): Promise<number> /*t*/
        get MemoryLow(): Promise<number> /*t*/
        get MemoryHigh(): Promise<number> /*t*/
        get MemoryMax(): Promise<number> /*t*/
        get MemorySwapMax(): Promise<number> /*t*/
        get MemoryZSwapMax(): Promise<number> /*t*/
        get MemoryLimit(): Promise<number> /*t*/
        get DevicePolicy(): Promise<string> /*s*/
        get DeviceAllow(): Promise<[string,string][]> /*a(ss)*/
        get TasksAccounting(): Promise<boolean> /*b*/
        get TasksMax(): Promise<number> /*t*/
        get IPAccounting(): Promise<boolean> /*b*/
        get IPAddressAllow(): Promise<[number,Buffer,number][]> /*a(iayu)*/
        get IPAddressDeny(): Promise<[number,Buffer,number][]> /*a(iayu)*/
        get IPIngressFilterPath(): Promise<string[]> /*as*/
        get IPEgressFilterPath(): Promise<string[]> /*as*/
        get DisableControllers(): Promise<string[]> /*as*/
        get ManagedOOMSwap(): Promise<string> /*s*/
        get ManagedOOMMemoryPressure(): Promise<string> /*s*/
        get ManagedOOMMemoryPressureLimit(): Promise<number> /*u*/
        get ManagedOOMPreference(): Promise<string> /*s*/
        get BPFProgram(): Promise<[string,string][]> /*a(ss)*/
        get SocketBindAllow(): Promise<[number,number,number,number][]> /*a(iiqq)*/
        get SocketBindDeny(): Promise<[number,number,number,number][]> /*a(iiqq)*/
        get RestrictNetworkInterfaces(): Promise<[boolean,string[]]> /*(bas)*/
        get Environment(): Promise<string[]> /*as*/
        get EnvironmentFiles(): Promise<[string,boolean][]> /*a(sb)*/
        get PassEnvironment(): Promise<string[]> /*as*/
        get UnsetEnvironment(): Promise<string[]> /*as*/
        get UMask(): Promise<number> /*u*/
        get LimitCPU(): Promise<number> /*t*/
        get LimitCPUSoft(): Promise<number> /*t*/
        get LimitFSIZE(): Promise<number> /*t*/
        get LimitFSIZESoft(): Promise<number> /*t*/
        get LimitDATA(): Promise<number> /*t*/
        get LimitDATASoft(): Promise<number> /*t*/
        get LimitSTACK(): Promise<number> /*t*/
        get LimitSTACKSoft(): Promise<number> /*t*/
        get LimitCORE(): Promise<number> /*t*/
        get LimitCORESoft(): Promise<number> /*t*/
        get LimitRSS(): Promise<number> /*t*/
        get LimitRSSSoft(): Promise<number> /*t*/
        get LimitNOFILE(): Promise<number> /*t*/
        get LimitNOFILESoft(): Promise<number> /*t*/
        get LimitAS(): Promise<number> /*t*/
        get LimitASSoft(): Promise<number> /*t*/
        get LimitNPROC(): Promise<number> /*t*/
        get LimitNPROCSoft(): Promise<number> /*t*/
        get LimitMEMLOCK(): Promise<number> /*t*/
        get LimitMEMLOCKSoft(): Promise<number> /*t*/
        get LimitLOCKS(): Promise<number> /*t*/
        get LimitLOCKSSoft(): Promise<number> /*t*/
        get LimitSIGPENDING(): Promise<number> /*t*/
        get LimitSIGPENDINGSoft(): Promise<number> /*t*/
        get LimitMSGQUEUE(): Promise<number> /*t*/
        get LimitMSGQUEUESoft(): Promise<number> /*t*/
        get LimitNICE(): Promise<number> /*t*/
        get LimitNICESoft(): Promise<number> /*t*/
        get LimitRTPRIO(): Promise<number> /*t*/
        get LimitRTPRIOSoft(): Promise<number> /*t*/
        get LimitRTTIME(): Promise<number> /*t*/
        get LimitRTTIMESoft(): Promise<number> /*t*/
        get WorkingDirectory(): Promise<string> /*s*/
        get RootDirectory(): Promise<string> /*s*/
        get RootImage(): Promise<string> /*s*/
        get RootImageOptions(): Promise<[string,string][]> /*a(ss)*/
        get RootHash(): Promise<Buffer> /*ay*/
        get RootHashPath(): Promise<string> /*s*/
        get RootHashSignature(): Promise<Buffer> /*ay*/
        get RootHashSignaturePath(): Promise<string> /*s*/
        get RootVerity(): Promise<string> /*s*/
        get ExtensionDirectories(): Promise<string[]> /*as*/
        get ExtensionImages(): Promise<[string,boolean,[string,string][]][]> /*a(sba(ss))*/
        get MountImages(): Promise<[string,string,boolean,[string,string][]][]> /*a(ssba(ss))*/
        get OOMScoreAdjust(): Promise<number> /*i*/
        get CoredumpFilter(): Promise<number> /*t*/
        get Nice(): Promise<number> /*i*/
        get IOSchedulingClass(): Promise<number> /*i*/
        get IOSchedulingPriority(): Promise<number> /*i*/
        get CPUSchedulingPolicy(): Promise<number> /*i*/
        get CPUSchedulingPriority(): Promise<number> /*i*/
        get CPUAffinity(): Promise<Buffer> /*ay*/
        get CPUAffinityFromNUMA(): Promise<boolean> /*b*/
        get NUMAPolicy(): Promise<number> /*i*/
        get NUMAMask(): Promise<Buffer> /*ay*/
        get TimerSlackNSec(): Promise<number> /*t*/
        get CPUSchedulingResetOnFork(): Promise<boolean> /*b*/
        get NonBlocking(): Promise<boolean> /*b*/
        get StandardInput(): Promise<string> /*s*/
        get StandardInputFileDescriptorName(): Promise<string> /*s*/
        get StandardInputData(): Promise<Buffer> /*ay*/
        get StandardOutput(): Promise<string> /*s*/
        get StandardOutputFileDescriptorName(): Promise<string> /*s*/
        get StandardError(): Promise<string> /*s*/
        get StandardErrorFileDescriptorName(): Promise<string> /*s*/
        get TTYPath(): Promise<string> /*s*/
        get TTYReset(): Promise<boolean> /*b*/
        get TTYVHangup(): Promise<boolean> /*b*/
        get TTYVTDisallocate(): Promise<boolean> /*b*/
        get TTYRows(): Promise<number> /*q*/
        get TTYColumns(): Promise<number> /*q*/
        get SyslogPriority(): Promise<number> /*i*/
        get SyslogIdentifier(): Promise<string> /*s*/
        get SyslogLevelPrefix(): Promise<boolean> /*b*/
        get SyslogLevel(): Promise<number> /*i*/
        get SyslogFacility(): Promise<number> /*i*/
        get LogLevelMax(): Promise<number> /*i*/
        get LogRateLimitIntervalUSec(): Promise<number> /*t*/
        get LogRateLimitBurst(): Promise<number> /*u*/
        get LogExtraFields(): Promise<Buffer[]> /*aay*/
        get LogFilterPatterns(): Promise<[boolean,string][]> /*a(bs)*/
        get LogNamespace(): Promise<string> /*s*/
        get SecureBits(): Promise<number> /*i*/
        get CapabilityBoundingSet(): Promise<number> /*t*/
        get AmbientCapabilities(): Promise<number> /*t*/
        get User(): Promise<string> /*s*/
        get Group(): Promise<string> /*s*/
        get DynamicUser(): Promise<boolean> /*b*/
        get RemoveIPC(): Promise<boolean> /*b*/
        get SetCredential(): Promise<[string,Buffer][]> /*a(say)*/
        get SetCredentialEncrypted(): Promise<[string,Buffer][]> /*a(say)*/
        get LoadCredential(): Promise<[string,string][]> /*a(ss)*/
        get LoadCredentialEncrypted(): Promise<[string,string][]> /*a(ss)*/
        get SupplementaryGroups(): Promise<string[]> /*as*/
        get PAMName(): Promise<string> /*s*/
        get ReadWritePaths(): Promise<string[]> /*as*/
        get ReadOnlyPaths(): Promise<string[]> /*as*/
        get InaccessiblePaths(): Promise<string[]> /*as*/
        get ExecPaths(): Promise<string[]> /*as*/
        get NoExecPaths(): Promise<string[]> /*as*/
        get ExecSearchPath(): Promise<string[]> /*as*/
        get MountFlags(): Promise<number> /*t*/
        get PrivateTmp(): Promise<boolean> /*b*/
        get PrivateDevices(): Promise<boolean> /*b*/
        get ProtectClock(): Promise<boolean> /*b*/
        get ProtectKernelTunables(): Promise<boolean> /*b*/
        get ProtectKernelModules(): Promise<boolean> /*b*/
        get ProtectKernelLogs(): Promise<boolean> /*b*/
        get ProtectControlGroups(): Promise<boolean> /*b*/
        get PrivateNetwork(): Promise<boolean> /*b*/
        get PrivateUsers(): Promise<boolean> /*b*/
        get PrivateMounts(): Promise<boolean> /*b*/
        get PrivateIPC(): Promise<boolean> /*b*/
        get ProtectHome(): Promise<string> /*s*/
        get ProtectSystem(): Promise<string> /*s*/
        get SameProcessGroup(): Promise<boolean> /*b*/
        get UtmpIdentifier(): Promise<string> /*s*/
        get UtmpMode(): Promise<string> /*s*/
        get SELinuxContext(): Promise<[boolean,string]> /*(bs)*/
        get AppArmorProfile(): Promise<[boolean,string]> /*(bs)*/
        get SmackProcessLabel(): Promise<[boolean,string]> /*(bs)*/
        get IgnoreSIGPIPE(): Promise<boolean> /*b*/
        get NoNewPrivileges(): Promise<boolean> /*b*/
        get SystemCallFilter(): Promise<[boolean,string[]]> /*(bas)*/
        get SystemCallArchitectures(): Promise<string[]> /*as*/
        get SystemCallErrorNumber(): Promise<number> /*i*/
        get SystemCallLog(): Promise<[boolean,string[]]> /*(bas)*/
        get Personality(): Promise<string> /*s*/
        get LockPersonality(): Promise<boolean> /*b*/
        get RestrictAddressFamilies(): Promise<[boolean,string[]]> /*(bas)*/
        get RuntimeDirectorySymlink(): Promise<[string,string,number][]> /*a(sst)*/
        get RuntimeDirectoryPreserve(): Promise<string> /*s*/
        get RuntimeDirectoryMode(): Promise<number> /*u*/
        get RuntimeDirectory(): Promise<string[]> /*as*/
        get StateDirectorySymlink(): Promise<[string,string,number][]> /*a(sst)*/
        get StateDirectoryMode(): Promise<number> /*u*/
        get StateDirectory(): Promise<string[]> /*as*/
        get CacheDirectorySymlink(): Promise<[string,string,number][]> /*a(sst)*/
        get CacheDirectoryMode(): Promise<number> /*u*/
        get CacheDirectory(): Promise<string[]> /*as*/
        get LogsDirectorySymlink(): Promise<[string,string,number][]> /*a(sst)*/
        get LogsDirectoryMode(): Promise<number> /*u*/
        get LogsDirectory(): Promise<string[]> /*as*/
        get ConfigurationDirectoryMode(): Promise<number> /*u*/
        get ConfigurationDirectory(): Promise<string[]> /*as*/
        get TimeoutCleanUSec(): Promise<number> /*t*/
        get MemoryDenyWriteExecute(): Promise<boolean> /*b*/
        get RestrictRealtime(): Promise<boolean> /*b*/
        get RestrictSUIDSGID(): Promise<boolean> /*b*/
        get RestrictNamespaces(): Promise<number> /*t*/
        get RestrictFileSystems(): Promise<[boolean,string[]]> /*(bas)*/
        get BindPaths(): Promise<[string,string,boolean,number][]> /*a(ssbt)*/
        get BindReadOnlyPaths(): Promise<[string,string,boolean,number][]> /*a(ssbt)*/
        get TemporaryFileSystem(): Promise<[string,string][]> /*a(ss)*/
        get MountAPIVFS(): Promise<boolean> /*b*/
        get KeyringMode(): Promise<string> /*s*/
        get ProtectProc(): Promise<string> /*s*/
        get ProcSubset(): Promise<string> /*s*/
        get ProtectHostname(): Promise<boolean> /*b*/
        get NetworkNamespacePath(): Promise<string> /*s*/
        get IPCNamespacePath(): Promise<string> /*s*/
        get KillMode(): Promise<string> /*s*/
        get KillSignal(): Promise<number> /*i*/
        get RestartKillSignal(): Promise<number> /*i*/
        get FinalKillSignal(): Promise<number> /*i*/
        get SendSIGKILL(): Promise<boolean> /*b*/
        get SendSIGHUP(): Promise<boolean> /*b*/
        get WatchdogSignal(): Promise<number> /*i*/
        GetProcesses(): Promise<[/*processes*/[string,number,string][]/*a(sus)*/]>
        AttachProcesses(subcgroup: string/*s*/, pids: number[]/*au*/): Promise<[]>
      }
      export interface Mount {
        get Where(): Promise<string> /*s*/
        get What(): Promise<string> /*s*/
        get Options(): Promise<string> /*s*/
        get Type(): Promise<string> /*s*/
        get TimeoutUSec(): Promise<number> /*t*/
        get ControlPID(): Promise<number> /*u*/
        get DirectoryMode(): Promise<number> /*u*/
        get SloppyOptions(): Promise<boolean> /*b*/
        get LazyUnmount(): Promise<boolean> /*b*/
        get ForceUnmount(): Promise<boolean> /*b*/
        get ReadWriteOnly(): Promise<boolean> /*b*/
        get Result(): Promise<string> /*s*/
        get UID(): Promise<number> /*u*/
        get GID(): Promise<number> /*u*/
        get ExecMount(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]> /*a(sasbttttuii)*/
        get ExecUnmount(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]> /*a(sasbttttuii)*/
        get ExecRemount(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]> /*a(sasbttttuii)*/
        get Slice(): Promise<string> /*s*/
        get ControlGroup(): Promise<string> /*s*/
        get ControlGroupId(): Promise<number> /*t*/
        get MemoryCurrent(): Promise<number> /*t*/
        get MemoryAvailable(): Promise<number> /*t*/
        get CPUUsageNSec(): Promise<number> /*t*/
        get EffectiveCPUs(): Promise<Buffer> /*ay*/
        get EffectiveMemoryNodes(): Promise<Buffer> /*ay*/
        get TasksCurrent(): Promise<number> /*t*/
        get IPIngressBytes(): Promise<number> /*t*/
        get IPIngressPackets(): Promise<number> /*t*/
        get IPEgressBytes(): Promise<number> /*t*/
        get IPEgressPackets(): Promise<number> /*t*/
        get IOReadBytes(): Promise<number> /*t*/
        get IOReadOperations(): Promise<number> /*t*/
        get IOWriteBytes(): Promise<number> /*t*/
        get IOWriteOperations(): Promise<number> /*t*/
        get Delegate(): Promise<boolean> /*b*/
        get DelegateControllers(): Promise<string[]> /*as*/
        get CPUAccounting(): Promise<boolean> /*b*/
        get CPUWeight(): Promise<number> /*t*/
        get StartupCPUWeight(): Promise<number> /*t*/
        get CPUShares(): Promise<number> /*t*/
        get StartupCPUShares(): Promise<number> /*t*/
        get CPUQuotaPerSecUSec(): Promise<number> /*t*/
        get CPUQuotaPeriodUSec(): Promise<number> /*t*/
        get AllowedCPUs(): Promise<Buffer> /*ay*/
        get StartupAllowedCPUs(): Promise<Buffer> /*ay*/
        get AllowedMemoryNodes(): Promise<Buffer> /*ay*/
        get StartupAllowedMemoryNodes(): Promise<Buffer> /*ay*/
        get IOAccounting(): Promise<boolean> /*b*/
        get IOWeight(): Promise<number> /*t*/
        get StartupIOWeight(): Promise<number> /*t*/
        get IODeviceWeight(): Promise<[string,number][]> /*a(st)*/
        get IOReadBandwidthMax(): Promise<[string,number][]> /*a(st)*/
        get IOWriteBandwidthMax(): Promise<[string,number][]> /*a(st)*/
        get IOReadIOPSMax(): Promise<[string,number][]> /*a(st)*/
        get IOWriteIOPSMax(): Promise<[string,number][]> /*a(st)*/
        get IODeviceLatencyTargetUSec(): Promise<[string,number][]> /*a(st)*/
        get BlockIOAccounting(): Promise<boolean> /*b*/
        get BlockIOWeight(): Promise<number> /*t*/
        get StartupBlockIOWeight(): Promise<number> /*t*/
        get BlockIODeviceWeight(): Promise<[string,number][]> /*a(st)*/
        get BlockIOReadBandwidth(): Promise<[string,number][]> /*a(st)*/
        get BlockIOWriteBandwidth(): Promise<[string,number][]> /*a(st)*/
        get MemoryAccounting(): Promise<boolean> /*b*/
        get DefaultMemoryLow(): Promise<number> /*t*/
        get DefaultMemoryMin(): Promise<number> /*t*/
        get MemoryMin(): Promise<number> /*t*/
        get MemoryLow(): Promise<number> /*t*/
        get MemoryHigh(): Promise<number> /*t*/
        get MemoryMax(): Promise<number> /*t*/
        get MemorySwapMax(): Promise<number> /*t*/
        get MemoryZSwapMax(): Promise<number> /*t*/
        get MemoryLimit(): Promise<number> /*t*/
        get DevicePolicy(): Promise<string> /*s*/
        get DeviceAllow(): Promise<[string,string][]> /*a(ss)*/
        get TasksAccounting(): Promise<boolean> /*b*/
        get TasksMax(): Promise<number> /*t*/
        get IPAccounting(): Promise<boolean> /*b*/
        get IPAddressAllow(): Promise<[number,Buffer,number][]> /*a(iayu)*/
        get IPAddressDeny(): Promise<[number,Buffer,number][]> /*a(iayu)*/
        get IPIngressFilterPath(): Promise<string[]> /*as*/
        get IPEgressFilterPath(): Promise<string[]> /*as*/
        get DisableControllers(): Promise<string[]> /*as*/
        get ManagedOOMSwap(): Promise<string> /*s*/
        get ManagedOOMMemoryPressure(): Promise<string> /*s*/
        get ManagedOOMMemoryPressureLimit(): Promise<number> /*u*/
        get ManagedOOMPreference(): Promise<string> /*s*/
        get BPFProgram(): Promise<[string,string][]> /*a(ss)*/
        get SocketBindAllow(): Promise<[number,number,number,number][]> /*a(iiqq)*/
        get SocketBindDeny(): Promise<[number,number,number,number][]> /*a(iiqq)*/
        get RestrictNetworkInterfaces(): Promise<[boolean,string[]]> /*(bas)*/
        get Environment(): Promise<string[]> /*as*/
        get EnvironmentFiles(): Promise<[string,boolean][]> /*a(sb)*/
        get PassEnvironment(): Promise<string[]> /*as*/
        get UnsetEnvironment(): Promise<string[]> /*as*/
        get UMask(): Promise<number> /*u*/
        get LimitCPU(): Promise<number> /*t*/
        get LimitCPUSoft(): Promise<number> /*t*/
        get LimitFSIZE(): Promise<number> /*t*/
        get LimitFSIZESoft(): Promise<number> /*t*/
        get LimitDATA(): Promise<number> /*t*/
        get LimitDATASoft(): Promise<number> /*t*/
        get LimitSTACK(): Promise<number> /*t*/
        get LimitSTACKSoft(): Promise<number> /*t*/
        get LimitCORE(): Promise<number> /*t*/
        get LimitCORESoft(): Promise<number> /*t*/
        get LimitRSS(): Promise<number> /*t*/
        get LimitRSSSoft(): Promise<number> /*t*/
        get LimitNOFILE(): Promise<number> /*t*/
        get LimitNOFILESoft(): Promise<number> /*t*/
        get LimitAS(): Promise<number> /*t*/
        get LimitASSoft(): Promise<number> /*t*/
        get LimitNPROC(): Promise<number> /*t*/
        get LimitNPROCSoft(): Promise<number> /*t*/
        get LimitMEMLOCK(): Promise<number> /*t*/
        get LimitMEMLOCKSoft(): Promise<number> /*t*/
        get LimitLOCKS(): Promise<number> /*t*/
        get LimitLOCKSSoft(): Promise<number> /*t*/
        get LimitSIGPENDING(): Promise<number> /*t*/
        get LimitSIGPENDINGSoft(): Promise<number> /*t*/
        get LimitMSGQUEUE(): Promise<number> /*t*/
        get LimitMSGQUEUESoft(): Promise<number> /*t*/
        get LimitNICE(): Promise<number> /*t*/
        get LimitNICESoft(): Promise<number> /*t*/
        get LimitRTPRIO(): Promise<number> /*t*/
        get LimitRTPRIOSoft(): Promise<number> /*t*/
        get LimitRTTIME(): Promise<number> /*t*/
        get LimitRTTIMESoft(): Promise<number> /*t*/
        get WorkingDirectory(): Promise<string> /*s*/
        get RootDirectory(): Promise<string> /*s*/
        get RootImage(): Promise<string> /*s*/
        get RootImageOptions(): Promise<[string,string][]> /*a(ss)*/
        get RootHash(): Promise<Buffer> /*ay*/
        get RootHashPath(): Promise<string> /*s*/
        get RootHashSignature(): Promise<Buffer> /*ay*/
        get RootHashSignaturePath(): Promise<string> /*s*/
        get RootVerity(): Promise<string> /*s*/
        get ExtensionDirectories(): Promise<string[]> /*as*/
        get ExtensionImages(): Promise<[string,boolean,[string,string][]][]> /*a(sba(ss))*/
        get MountImages(): Promise<[string,string,boolean,[string,string][]][]> /*a(ssba(ss))*/
        get OOMScoreAdjust(): Promise<number> /*i*/
        get CoredumpFilter(): Promise<number> /*t*/
        get Nice(): Promise<number> /*i*/
        get IOSchedulingClass(): Promise<number> /*i*/
        get IOSchedulingPriority(): Promise<number> /*i*/
        get CPUSchedulingPolicy(): Promise<number> /*i*/
        get CPUSchedulingPriority(): Promise<number> /*i*/
        get CPUAffinity(): Promise<Buffer> /*ay*/
        get CPUAffinityFromNUMA(): Promise<boolean> /*b*/
        get NUMAPolicy(): Promise<number> /*i*/
        get NUMAMask(): Promise<Buffer> /*ay*/
        get TimerSlackNSec(): Promise<number> /*t*/
        get CPUSchedulingResetOnFork(): Promise<boolean> /*b*/
        get NonBlocking(): Promise<boolean> /*b*/
        get StandardInput(): Promise<string> /*s*/
        get StandardInputFileDescriptorName(): Promise<string> /*s*/
        get StandardInputData(): Promise<Buffer> /*ay*/
        get StandardOutput(): Promise<string> /*s*/
        get StandardOutputFileDescriptorName(): Promise<string> /*s*/
        get StandardError(): Promise<string> /*s*/
        get StandardErrorFileDescriptorName(): Promise<string> /*s*/
        get TTYPath(): Promise<string> /*s*/
        get TTYReset(): Promise<boolean> /*b*/
        get TTYVHangup(): Promise<boolean> /*b*/
        get TTYVTDisallocate(): Promise<boolean> /*b*/
        get TTYRows(): Promise<number> /*q*/
        get TTYColumns(): Promise<number> /*q*/
        get SyslogPriority(): Promise<number> /*i*/
        get SyslogIdentifier(): Promise<string> /*s*/
        get SyslogLevelPrefix(): Promise<boolean> /*b*/
        get SyslogLevel(): Promise<number> /*i*/
        get SyslogFacility(): Promise<number> /*i*/
        get LogLevelMax(): Promise<number> /*i*/
        get LogRateLimitIntervalUSec(): Promise<number> /*t*/
        get LogRateLimitBurst(): Promise<number> /*u*/
        get LogExtraFields(): Promise<Buffer[]> /*aay*/
        get LogFilterPatterns(): Promise<[boolean,string][]> /*a(bs)*/
        get LogNamespace(): Promise<string> /*s*/
        get SecureBits(): Promise<number> /*i*/
        get CapabilityBoundingSet(): Promise<number> /*t*/
        get AmbientCapabilities(): Promise<number> /*t*/
        get User(): Promise<string> /*s*/
        get Group(): Promise<string> /*s*/
        get DynamicUser(): Promise<boolean> /*b*/
        get RemoveIPC(): Promise<boolean> /*b*/
        get SetCredential(): Promise<[string,Buffer][]> /*a(say)*/
        get SetCredentialEncrypted(): Promise<[string,Buffer][]> /*a(say)*/
        get LoadCredential(): Promise<[string,string][]> /*a(ss)*/
        get LoadCredentialEncrypted(): Promise<[string,string][]> /*a(ss)*/
        get SupplementaryGroups(): Promise<string[]> /*as*/
        get PAMName(): Promise<string> /*s*/
        get ReadWritePaths(): Promise<string[]> /*as*/
        get ReadOnlyPaths(): Promise<string[]> /*as*/
        get InaccessiblePaths(): Promise<string[]> /*as*/
        get ExecPaths(): Promise<string[]> /*as*/
        get NoExecPaths(): Promise<string[]> /*as*/
        get ExecSearchPath(): Promise<string[]> /*as*/
        get MountFlags(): Promise<number> /*t*/
        get PrivateTmp(): Promise<boolean> /*b*/
        get PrivateDevices(): Promise<boolean> /*b*/
        get ProtectClock(): Promise<boolean> /*b*/
        get ProtectKernelTunables(): Promise<boolean> /*b*/
        get ProtectKernelModules(): Promise<boolean> /*b*/
        get ProtectKernelLogs(): Promise<boolean> /*b*/
        get ProtectControlGroups(): Promise<boolean> /*b*/
        get PrivateNetwork(): Promise<boolean> /*b*/
        get PrivateUsers(): Promise<boolean> /*b*/
        get PrivateMounts(): Promise<boolean> /*b*/
        get PrivateIPC(): Promise<boolean> /*b*/
        get ProtectHome(): Promise<string> /*s*/
        get ProtectSystem(): Promise<string> /*s*/
        get SameProcessGroup(): Promise<boolean> /*b*/
        get UtmpIdentifier(): Promise<string> /*s*/
        get UtmpMode(): Promise<string> /*s*/
        get SELinuxContext(): Promise<[boolean,string]> /*(bs)*/
        get AppArmorProfile(): Promise<[boolean,string]> /*(bs)*/
        get SmackProcessLabel(): Promise<[boolean,string]> /*(bs)*/
        get IgnoreSIGPIPE(): Promise<boolean> /*b*/
        get NoNewPrivileges(): Promise<boolean> /*b*/
        get SystemCallFilter(): Promise<[boolean,string[]]> /*(bas)*/
        get SystemCallArchitectures(): Promise<string[]> /*as*/
        get SystemCallErrorNumber(): Promise<number> /*i*/
        get SystemCallLog(): Promise<[boolean,string[]]> /*(bas)*/
        get Personality(): Promise<string> /*s*/
        get LockPersonality(): Promise<boolean> /*b*/
        get RestrictAddressFamilies(): Promise<[boolean,string[]]> /*(bas)*/
        get RuntimeDirectorySymlink(): Promise<[string,string,number][]> /*a(sst)*/
        get RuntimeDirectoryPreserve(): Promise<string> /*s*/
        get RuntimeDirectoryMode(): Promise<number> /*u*/
        get RuntimeDirectory(): Promise<string[]> /*as*/
        get StateDirectorySymlink(): Promise<[string,string,number][]> /*a(sst)*/
        get StateDirectoryMode(): Promise<number> /*u*/
        get StateDirectory(): Promise<string[]> /*as*/
        get CacheDirectorySymlink(): Promise<[string,string,number][]> /*a(sst)*/
        get CacheDirectoryMode(): Promise<number> /*u*/
        get CacheDirectory(): Promise<string[]> /*as*/
        get LogsDirectorySymlink(): Promise<[string,string,number][]> /*a(sst)*/
        get LogsDirectoryMode(): Promise<number> /*u*/
        get LogsDirectory(): Promise<string[]> /*as*/
        get ConfigurationDirectoryMode(): Promise<number> /*u*/
        get ConfigurationDirectory(): Promise<string[]> /*as*/
        get TimeoutCleanUSec(): Promise<number> /*t*/
        get MemoryDenyWriteExecute(): Promise<boolean> /*b*/
        get RestrictRealtime(): Promise<boolean> /*b*/
        get RestrictSUIDSGID(): Promise<boolean> /*b*/
        get RestrictNamespaces(): Promise<number> /*t*/
        get RestrictFileSystems(): Promise<[boolean,string[]]> /*(bas)*/
        get BindPaths(): Promise<[string,string,boolean,number][]> /*a(ssbt)*/
        get BindReadOnlyPaths(): Promise<[string,string,boolean,number][]> /*a(ssbt)*/
        get TemporaryFileSystem(): Promise<[string,string][]> /*a(ss)*/
        get MountAPIVFS(): Promise<boolean> /*b*/
        get KeyringMode(): Promise<string> /*s*/
        get ProtectProc(): Promise<string> /*s*/
        get ProcSubset(): Promise<string> /*s*/
        get ProtectHostname(): Promise<boolean> /*b*/
        get NetworkNamespacePath(): Promise<string> /*s*/
        get IPCNamespacePath(): Promise<string> /*s*/
        get KillMode(): Promise<string> /*s*/
        get KillSignal(): Promise<number> /*i*/
        get RestartKillSignal(): Promise<number> /*i*/
        get FinalKillSignal(): Promise<number> /*i*/
        get SendSIGKILL(): Promise<boolean> /*b*/
        get SendSIGHUP(): Promise<boolean> /*b*/
        get WatchdogSignal(): Promise<number> /*i*/
        GetProcesses(): Promise<[/*processes*/[string,number,string][]/*a(sus)*/]>
        AttachProcesses(subcgroup: string/*s*/, pids: number[]/*au*/): Promise<[]>
      }
      export interface Scope {
        on(ev: "RequestStop", cb: () => void)
        get Controller(): Promise<string> /*s*/
        get TimeoutStopUSec(): Promise<number> /*t*/
        get Result(): Promise<string> /*s*/
        get RuntimeMaxUSec(): Promise<number> /*t*/
        get RuntimeRandomizedExtraUSec(): Promise<number> /*t*/
        get OOMPolicy(): Promise<string> /*s*/
        get Slice(): Promise<string> /*s*/
        get ControlGroup(): Promise<string> /*s*/
        get ControlGroupId(): Promise<number> /*t*/
        get MemoryCurrent(): Promise<number> /*t*/
        get MemoryAvailable(): Promise<number> /*t*/
        get CPUUsageNSec(): Promise<number> /*t*/
        get EffectiveCPUs(): Promise<Buffer> /*ay*/
        get EffectiveMemoryNodes(): Promise<Buffer> /*ay*/
        get TasksCurrent(): Promise<number> /*t*/
        get IPIngressBytes(): Promise<number> /*t*/
        get IPIngressPackets(): Promise<number> /*t*/
        get IPEgressBytes(): Promise<number> /*t*/
        get IPEgressPackets(): Promise<number> /*t*/
        get IOReadBytes(): Promise<number> /*t*/
        get IOReadOperations(): Promise<number> /*t*/
        get IOWriteBytes(): Promise<number> /*t*/
        get IOWriteOperations(): Promise<number> /*t*/
        get Delegate(): Promise<boolean> /*b*/
        get DelegateControllers(): Promise<string[]> /*as*/
        get CPUAccounting(): Promise<boolean> /*b*/
        get CPUWeight(): Promise<number> /*t*/
        get StartupCPUWeight(): Promise<number> /*t*/
        get CPUShares(): Promise<number> /*t*/
        get StartupCPUShares(): Promise<number> /*t*/
        get CPUQuotaPerSecUSec(): Promise<number> /*t*/
        get CPUQuotaPeriodUSec(): Promise<number> /*t*/
        get AllowedCPUs(): Promise<Buffer> /*ay*/
        get StartupAllowedCPUs(): Promise<Buffer> /*ay*/
        get AllowedMemoryNodes(): Promise<Buffer> /*ay*/
        get StartupAllowedMemoryNodes(): Promise<Buffer> /*ay*/
        get IOAccounting(): Promise<boolean> /*b*/
        get IOWeight(): Promise<number> /*t*/
        get StartupIOWeight(): Promise<number> /*t*/
        get IODeviceWeight(): Promise<[string,number][]> /*a(st)*/
        get IOReadBandwidthMax(): Promise<[string,number][]> /*a(st)*/
        get IOWriteBandwidthMax(): Promise<[string,number][]> /*a(st)*/
        get IOReadIOPSMax(): Promise<[string,number][]> /*a(st)*/
        get IOWriteIOPSMax(): Promise<[string,number][]> /*a(st)*/
        get IODeviceLatencyTargetUSec(): Promise<[string,number][]> /*a(st)*/
        get BlockIOAccounting(): Promise<boolean> /*b*/
        get BlockIOWeight(): Promise<number> /*t*/
        get StartupBlockIOWeight(): Promise<number> /*t*/
        get BlockIODeviceWeight(): Promise<[string,number][]> /*a(st)*/
        get BlockIOReadBandwidth(): Promise<[string,number][]> /*a(st)*/
        get BlockIOWriteBandwidth(): Promise<[string,number][]> /*a(st)*/
        get MemoryAccounting(): Promise<boolean> /*b*/
        get DefaultMemoryLow(): Promise<number> /*t*/
        get DefaultMemoryMin(): Promise<number> /*t*/
        get MemoryMin(): Promise<number> /*t*/
        get MemoryLow(): Promise<number> /*t*/
        get MemoryHigh(): Promise<number> /*t*/
        get MemoryMax(): Promise<number> /*t*/
        get MemorySwapMax(): Promise<number> /*t*/
        get MemoryZSwapMax(): Promise<number> /*t*/
        get MemoryLimit(): Promise<number> /*t*/
        get DevicePolicy(): Promise<string> /*s*/
        get DeviceAllow(): Promise<[string,string][]> /*a(ss)*/
        get TasksAccounting(): Promise<boolean> /*b*/
        get TasksMax(): Promise<number> /*t*/
        get IPAccounting(): Promise<boolean> /*b*/
        get IPAddressAllow(): Promise<[number,Buffer,number][]> /*a(iayu)*/
        get IPAddressDeny(): Promise<[number,Buffer,number][]> /*a(iayu)*/
        get IPIngressFilterPath(): Promise<string[]> /*as*/
        get IPEgressFilterPath(): Promise<string[]> /*as*/
        get DisableControllers(): Promise<string[]> /*as*/
        get ManagedOOMSwap(): Promise<string> /*s*/
        get ManagedOOMMemoryPressure(): Promise<string> /*s*/
        get ManagedOOMMemoryPressureLimit(): Promise<number> /*u*/
        get ManagedOOMPreference(): Promise<string> /*s*/
        get BPFProgram(): Promise<[string,string][]> /*a(ss)*/
        get SocketBindAllow(): Promise<[number,number,number,number][]> /*a(iiqq)*/
        get SocketBindDeny(): Promise<[number,number,number,number][]> /*a(iiqq)*/
        get RestrictNetworkInterfaces(): Promise<[boolean,string[]]> /*(bas)*/
        get KillMode(): Promise<string> /*s*/
        get KillSignal(): Promise<number> /*i*/
        get RestartKillSignal(): Promise<number> /*i*/
        get FinalKillSignal(): Promise<number> /*i*/
        get SendSIGKILL(): Promise<boolean> /*b*/
        get SendSIGHUP(): Promise<boolean> /*b*/
        get WatchdogSignal(): Promise<number> /*i*/
        Abandon(): Promise<[]>
        GetProcesses(): Promise<[/*processes*/[string,number,string][]/*a(sus)*/]>
        AttachProcesses(subcgroup: string/*s*/, pids: number[]/*au*/): Promise<[]>
      }
      export interface Path {
        get Unit(): Promise<string> /*s*/
        get Paths(): Promise<[string,string][]> /*a(ss)*/
        get MakeDirectory(): Promise<boolean> /*b*/
        get DirectoryMode(): Promise<number> /*u*/
        get Result(): Promise<string> /*s*/
        get TriggerLimitIntervalUSec(): Promise<number> /*t*/
        get TriggerLimitBurst(): Promise<number> /*u*/
      }
      export interface Slice {
        get Slice(): Promise<string> /*s*/
        get ControlGroup(): Promise<string> /*s*/
        get ControlGroupId(): Promise<number> /*t*/
        get MemoryCurrent(): Promise<number> /*t*/
        get MemoryAvailable(): Promise<number> /*t*/
        get CPUUsageNSec(): Promise<number> /*t*/
        get EffectiveCPUs(): Promise<Buffer> /*ay*/
        get EffectiveMemoryNodes(): Promise<Buffer> /*ay*/
        get TasksCurrent(): Promise<number> /*t*/
        get IPIngressBytes(): Promise<number> /*t*/
        get IPIngressPackets(): Promise<number> /*t*/
        get IPEgressBytes(): Promise<number> /*t*/
        get IPEgressPackets(): Promise<number> /*t*/
        get IOReadBytes(): Promise<number> /*t*/
        get IOReadOperations(): Promise<number> /*t*/
        get IOWriteBytes(): Promise<number> /*t*/
        get IOWriteOperations(): Promise<number> /*t*/
        get Delegate(): Promise<boolean> /*b*/
        get DelegateControllers(): Promise<string[]> /*as*/
        get CPUAccounting(): Promise<boolean> /*b*/
        get CPUWeight(): Promise<number> /*t*/
        get StartupCPUWeight(): Promise<number> /*t*/
        get CPUShares(): Promise<number> /*t*/
        get StartupCPUShares(): Promise<number> /*t*/
        get CPUQuotaPerSecUSec(): Promise<number> /*t*/
        get CPUQuotaPeriodUSec(): Promise<number> /*t*/
        get AllowedCPUs(): Promise<Buffer> /*ay*/
        get StartupAllowedCPUs(): Promise<Buffer> /*ay*/
        get AllowedMemoryNodes(): Promise<Buffer> /*ay*/
        get StartupAllowedMemoryNodes(): Promise<Buffer> /*ay*/
        get IOAccounting(): Promise<boolean> /*b*/
        get IOWeight(): Promise<number> /*t*/
        get StartupIOWeight(): Promise<number> /*t*/
        get IODeviceWeight(): Promise<[string,number][]> /*a(st)*/
        get IOReadBandwidthMax(): Promise<[string,number][]> /*a(st)*/
        get IOWriteBandwidthMax(): Promise<[string,number][]> /*a(st)*/
        get IOReadIOPSMax(): Promise<[string,number][]> /*a(st)*/
        get IOWriteIOPSMax(): Promise<[string,number][]> /*a(st)*/
        get IODeviceLatencyTargetUSec(): Promise<[string,number][]> /*a(st)*/
        get BlockIOAccounting(): Promise<boolean> /*b*/
        get BlockIOWeight(): Promise<number> /*t*/
        get StartupBlockIOWeight(): Promise<number> /*t*/
        get BlockIODeviceWeight(): Promise<[string,number][]> /*a(st)*/
        get BlockIOReadBandwidth(): Promise<[string,number][]> /*a(st)*/
        get BlockIOWriteBandwidth(): Promise<[string,number][]> /*a(st)*/
        get MemoryAccounting(): Promise<boolean> /*b*/
        get DefaultMemoryLow(): Promise<number> /*t*/
        get DefaultMemoryMin(): Promise<number> /*t*/
        get MemoryMin(): Promise<number> /*t*/
        get MemoryLow(): Promise<number> /*t*/
        get MemoryHigh(): Promise<number> /*t*/
        get MemoryMax(): Promise<number> /*t*/
        get MemorySwapMax(): Promise<number> /*t*/
        get MemoryZSwapMax(): Promise<number> /*t*/
        get MemoryLimit(): Promise<number> /*t*/
        get DevicePolicy(): Promise<string> /*s*/
        get DeviceAllow(): Promise<[string,string][]> /*a(ss)*/
        get TasksAccounting(): Promise<boolean> /*b*/
        get TasksMax(): Promise<number> /*t*/
        get IPAccounting(): Promise<boolean> /*b*/
        get IPAddressAllow(): Promise<[number,Buffer,number][]> /*a(iayu)*/
        get IPAddressDeny(): Promise<[number,Buffer,number][]> /*a(iayu)*/
        get IPIngressFilterPath(): Promise<string[]> /*as*/
        get IPEgressFilterPath(): Promise<string[]> /*as*/
        get DisableControllers(): Promise<string[]> /*as*/
        get ManagedOOMSwap(): Promise<string> /*s*/
        get ManagedOOMMemoryPressure(): Promise<string> /*s*/
        get ManagedOOMMemoryPressureLimit(): Promise<number> /*u*/
        get ManagedOOMPreference(): Promise<string> /*s*/
        get BPFProgram(): Promise<[string,string][]> /*a(ss)*/
        get SocketBindAllow(): Promise<[number,number,number,number][]> /*a(iiqq)*/
        get SocketBindDeny(): Promise<[number,number,number,number][]> /*a(iiqq)*/
        get RestrictNetworkInterfaces(): Promise<[boolean,string[]]> /*(bas)*/
        GetProcesses(): Promise<[/*processes*/[string,number,string][]/*a(sus)*/]>
        AttachProcesses(subcgroup: string/*s*/, pids: number[]/*au*/): Promise<[]>
      }
      export interface Swap {
        get What(): Promise<string> /*s*/
        get Priority(): Promise<number> /*i*/
        get Options(): Promise<string> /*s*/
        get TimeoutUSec(): Promise<number> /*t*/
        get ControlPID(): Promise<number> /*u*/
        get Result(): Promise<string> /*s*/
        get UID(): Promise<number> /*u*/
        get GID(): Promise<number> /*u*/
        get ExecActivate(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]> /*a(sasbttttuii)*/
        get ExecDeactivate(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]> /*a(sasbttttuii)*/
        get Slice(): Promise<string> /*s*/
        get ControlGroup(): Promise<string> /*s*/
        get ControlGroupId(): Promise<number> /*t*/
        get MemoryCurrent(): Promise<number> /*t*/
        get MemoryAvailable(): Promise<number> /*t*/
        get CPUUsageNSec(): Promise<number> /*t*/
        get EffectiveCPUs(): Promise<Buffer> /*ay*/
        get EffectiveMemoryNodes(): Promise<Buffer> /*ay*/
        get TasksCurrent(): Promise<number> /*t*/
        get IPIngressBytes(): Promise<number> /*t*/
        get IPIngressPackets(): Promise<number> /*t*/
        get IPEgressBytes(): Promise<number> /*t*/
        get IPEgressPackets(): Promise<number> /*t*/
        get IOReadBytes(): Promise<number> /*t*/
        get IOReadOperations(): Promise<number> /*t*/
        get IOWriteBytes(): Promise<number> /*t*/
        get IOWriteOperations(): Promise<number> /*t*/
        get Delegate(): Promise<boolean> /*b*/
        get DelegateControllers(): Promise<string[]> /*as*/
        get CPUAccounting(): Promise<boolean> /*b*/
        get CPUWeight(): Promise<number> /*t*/
        get StartupCPUWeight(): Promise<number> /*t*/
        get CPUShares(): Promise<number> /*t*/
        get StartupCPUShares(): Promise<number> /*t*/
        get CPUQuotaPerSecUSec(): Promise<number> /*t*/
        get CPUQuotaPeriodUSec(): Promise<number> /*t*/
        get AllowedCPUs(): Promise<Buffer> /*ay*/
        get StartupAllowedCPUs(): Promise<Buffer> /*ay*/
        get AllowedMemoryNodes(): Promise<Buffer> /*ay*/
        get StartupAllowedMemoryNodes(): Promise<Buffer> /*ay*/
        get IOAccounting(): Promise<boolean> /*b*/
        get IOWeight(): Promise<number> /*t*/
        get StartupIOWeight(): Promise<number> /*t*/
        get IODeviceWeight(): Promise<[string,number][]> /*a(st)*/
        get IOReadBandwidthMax(): Promise<[string,number][]> /*a(st)*/
        get IOWriteBandwidthMax(): Promise<[string,number][]> /*a(st)*/
        get IOReadIOPSMax(): Promise<[string,number][]> /*a(st)*/
        get IOWriteIOPSMax(): Promise<[string,number][]> /*a(st)*/
        get IODeviceLatencyTargetUSec(): Promise<[string,number][]> /*a(st)*/
        get BlockIOAccounting(): Promise<boolean> /*b*/
        get BlockIOWeight(): Promise<number> /*t*/
        get StartupBlockIOWeight(): Promise<number> /*t*/
        get BlockIODeviceWeight(): Promise<[string,number][]> /*a(st)*/
        get BlockIOReadBandwidth(): Promise<[string,number][]> /*a(st)*/
        get BlockIOWriteBandwidth(): Promise<[string,number][]> /*a(st)*/
        get MemoryAccounting(): Promise<boolean> /*b*/
        get DefaultMemoryLow(): Promise<number> /*t*/
        get DefaultMemoryMin(): Promise<number> /*t*/
        get MemoryMin(): Promise<number> /*t*/
        get MemoryLow(): Promise<number> /*t*/
        get MemoryHigh(): Promise<number> /*t*/
        get MemoryMax(): Promise<number> /*t*/
        get MemorySwapMax(): Promise<number> /*t*/
        get MemoryZSwapMax(): Promise<number> /*t*/
        get MemoryLimit(): Promise<number> /*t*/
        get DevicePolicy(): Promise<string> /*s*/
        get DeviceAllow(): Promise<[string,string][]> /*a(ss)*/
        get TasksAccounting(): Promise<boolean> /*b*/
        get TasksMax(): Promise<number> /*t*/
        get IPAccounting(): Promise<boolean> /*b*/
        get IPAddressAllow(): Promise<[number,Buffer,number][]> /*a(iayu)*/
        get IPAddressDeny(): Promise<[number,Buffer,number][]> /*a(iayu)*/
        get IPIngressFilterPath(): Promise<string[]> /*as*/
        get IPEgressFilterPath(): Promise<string[]> /*as*/
        get DisableControllers(): Promise<string[]> /*as*/
        get ManagedOOMSwap(): Promise<string> /*s*/
        get ManagedOOMMemoryPressure(): Promise<string> /*s*/
        get ManagedOOMMemoryPressureLimit(): Promise<number> /*u*/
        get ManagedOOMPreference(): Promise<string> /*s*/
        get BPFProgram(): Promise<[string,string][]> /*a(ss)*/
        get SocketBindAllow(): Promise<[number,number,number,number][]> /*a(iiqq)*/
        get SocketBindDeny(): Promise<[number,number,number,number][]> /*a(iiqq)*/
        get RestrictNetworkInterfaces(): Promise<[boolean,string[]]> /*(bas)*/
        get Environment(): Promise<string[]> /*as*/
        get EnvironmentFiles(): Promise<[string,boolean][]> /*a(sb)*/
        get PassEnvironment(): Promise<string[]> /*as*/
        get UnsetEnvironment(): Promise<string[]> /*as*/
        get UMask(): Promise<number> /*u*/
        get LimitCPU(): Promise<number> /*t*/
        get LimitCPUSoft(): Promise<number> /*t*/
        get LimitFSIZE(): Promise<number> /*t*/
        get LimitFSIZESoft(): Promise<number> /*t*/
        get LimitDATA(): Promise<number> /*t*/
        get LimitDATASoft(): Promise<number> /*t*/
        get LimitSTACK(): Promise<number> /*t*/
        get LimitSTACKSoft(): Promise<number> /*t*/
        get LimitCORE(): Promise<number> /*t*/
        get LimitCORESoft(): Promise<number> /*t*/
        get LimitRSS(): Promise<number> /*t*/
        get LimitRSSSoft(): Promise<number> /*t*/
        get LimitNOFILE(): Promise<number> /*t*/
        get LimitNOFILESoft(): Promise<number> /*t*/
        get LimitAS(): Promise<number> /*t*/
        get LimitASSoft(): Promise<number> /*t*/
        get LimitNPROC(): Promise<number> /*t*/
        get LimitNPROCSoft(): Promise<number> /*t*/
        get LimitMEMLOCK(): Promise<number> /*t*/
        get LimitMEMLOCKSoft(): Promise<number> /*t*/
        get LimitLOCKS(): Promise<number> /*t*/
        get LimitLOCKSSoft(): Promise<number> /*t*/
        get LimitSIGPENDING(): Promise<number> /*t*/
        get LimitSIGPENDINGSoft(): Promise<number> /*t*/
        get LimitMSGQUEUE(): Promise<number> /*t*/
        get LimitMSGQUEUESoft(): Promise<number> /*t*/
        get LimitNICE(): Promise<number> /*t*/
        get LimitNICESoft(): Promise<number> /*t*/
        get LimitRTPRIO(): Promise<number> /*t*/
        get LimitRTPRIOSoft(): Promise<number> /*t*/
        get LimitRTTIME(): Promise<number> /*t*/
        get LimitRTTIMESoft(): Promise<number> /*t*/
        get WorkingDirectory(): Promise<string> /*s*/
        get RootDirectory(): Promise<string> /*s*/
        get RootImage(): Promise<string> /*s*/
        get RootImageOptions(): Promise<[string,string][]> /*a(ss)*/
        get RootHash(): Promise<Buffer> /*ay*/
        get RootHashPath(): Promise<string> /*s*/
        get RootHashSignature(): Promise<Buffer> /*ay*/
        get RootHashSignaturePath(): Promise<string> /*s*/
        get RootVerity(): Promise<string> /*s*/
        get ExtensionDirectories(): Promise<string[]> /*as*/
        get ExtensionImages(): Promise<[string,boolean,[string,string][]][]> /*a(sba(ss))*/
        get MountImages(): Promise<[string,string,boolean,[string,string][]][]> /*a(ssba(ss))*/
        get OOMScoreAdjust(): Promise<number> /*i*/
        get CoredumpFilter(): Promise<number> /*t*/
        get Nice(): Promise<number> /*i*/
        get IOSchedulingClass(): Promise<number> /*i*/
        get IOSchedulingPriority(): Promise<number> /*i*/
        get CPUSchedulingPolicy(): Promise<number> /*i*/
        get CPUSchedulingPriority(): Promise<number> /*i*/
        get CPUAffinity(): Promise<Buffer> /*ay*/
        get CPUAffinityFromNUMA(): Promise<boolean> /*b*/
        get NUMAPolicy(): Promise<number> /*i*/
        get NUMAMask(): Promise<Buffer> /*ay*/
        get TimerSlackNSec(): Promise<number> /*t*/
        get CPUSchedulingResetOnFork(): Promise<boolean> /*b*/
        get NonBlocking(): Promise<boolean> /*b*/
        get StandardInput(): Promise<string> /*s*/
        get StandardInputFileDescriptorName(): Promise<string> /*s*/
        get StandardInputData(): Promise<Buffer> /*ay*/
        get StandardOutput(): Promise<string> /*s*/
        get StandardOutputFileDescriptorName(): Promise<string> /*s*/
        get StandardError(): Promise<string> /*s*/
        get StandardErrorFileDescriptorName(): Promise<string> /*s*/
        get TTYPath(): Promise<string> /*s*/
        get TTYReset(): Promise<boolean> /*b*/
        get TTYVHangup(): Promise<boolean> /*b*/
        get TTYVTDisallocate(): Promise<boolean> /*b*/
        get TTYRows(): Promise<number> /*q*/
        get TTYColumns(): Promise<number> /*q*/
        get SyslogPriority(): Promise<number> /*i*/
        get SyslogIdentifier(): Promise<string> /*s*/
        get SyslogLevelPrefix(): Promise<boolean> /*b*/
        get SyslogLevel(): Promise<number> /*i*/
        get SyslogFacility(): Promise<number> /*i*/
        get LogLevelMax(): Promise<number> /*i*/
        get LogRateLimitIntervalUSec(): Promise<number> /*t*/
        get LogRateLimitBurst(): Promise<number> /*u*/
        get LogExtraFields(): Promise<Buffer[]> /*aay*/
        get LogFilterPatterns(): Promise<[boolean,string][]> /*a(bs)*/
        get LogNamespace(): Promise<string> /*s*/
        get SecureBits(): Promise<number> /*i*/
        get CapabilityBoundingSet(): Promise<number> /*t*/
        get AmbientCapabilities(): Promise<number> /*t*/
        get User(): Promise<string> /*s*/
        get Group(): Promise<string> /*s*/
        get DynamicUser(): Promise<boolean> /*b*/
        get RemoveIPC(): Promise<boolean> /*b*/
        get SetCredential(): Promise<[string,Buffer][]> /*a(say)*/
        get SetCredentialEncrypted(): Promise<[string,Buffer][]> /*a(say)*/
        get LoadCredential(): Promise<[string,string][]> /*a(ss)*/
        get LoadCredentialEncrypted(): Promise<[string,string][]> /*a(ss)*/
        get SupplementaryGroups(): Promise<string[]> /*as*/
        get PAMName(): Promise<string> /*s*/
        get ReadWritePaths(): Promise<string[]> /*as*/
        get ReadOnlyPaths(): Promise<string[]> /*as*/
        get InaccessiblePaths(): Promise<string[]> /*as*/
        get ExecPaths(): Promise<string[]> /*as*/
        get NoExecPaths(): Promise<string[]> /*as*/
        get ExecSearchPath(): Promise<string[]> /*as*/
        get MountFlags(): Promise<number> /*t*/
        get PrivateTmp(): Promise<boolean> /*b*/
        get PrivateDevices(): Promise<boolean> /*b*/
        get ProtectClock(): Promise<boolean> /*b*/
        get ProtectKernelTunables(): Promise<boolean> /*b*/
        get ProtectKernelModules(): Promise<boolean> /*b*/
        get ProtectKernelLogs(): Promise<boolean> /*b*/
        get ProtectControlGroups(): Promise<boolean> /*b*/
        get PrivateNetwork(): Promise<boolean> /*b*/
        get PrivateUsers(): Promise<boolean> /*b*/
        get PrivateMounts(): Promise<boolean> /*b*/
        get PrivateIPC(): Promise<boolean> /*b*/
        get ProtectHome(): Promise<string> /*s*/
        get ProtectSystem(): Promise<string> /*s*/
        get SameProcessGroup(): Promise<boolean> /*b*/
        get UtmpIdentifier(): Promise<string> /*s*/
        get UtmpMode(): Promise<string> /*s*/
        get SELinuxContext(): Promise<[boolean,string]> /*(bs)*/
        get AppArmorProfile(): Promise<[boolean,string]> /*(bs)*/
        get SmackProcessLabel(): Promise<[boolean,string]> /*(bs)*/
        get IgnoreSIGPIPE(): Promise<boolean> /*b*/
        get NoNewPrivileges(): Promise<boolean> /*b*/
        get SystemCallFilter(): Promise<[boolean,string[]]> /*(bas)*/
        get SystemCallArchitectures(): Promise<string[]> /*as*/
        get SystemCallErrorNumber(): Promise<number> /*i*/
        get SystemCallLog(): Promise<[boolean,string[]]> /*(bas)*/
        get Personality(): Promise<string> /*s*/
        get LockPersonality(): Promise<boolean> /*b*/
        get RestrictAddressFamilies(): Promise<[boolean,string[]]> /*(bas)*/
        get RuntimeDirectorySymlink(): Promise<[string,string,number][]> /*a(sst)*/
        get RuntimeDirectoryPreserve(): Promise<string> /*s*/
        get RuntimeDirectoryMode(): Promise<number> /*u*/
        get RuntimeDirectory(): Promise<string[]> /*as*/
        get StateDirectorySymlink(): Promise<[string,string,number][]> /*a(sst)*/
        get StateDirectoryMode(): Promise<number> /*u*/
        get StateDirectory(): Promise<string[]> /*as*/
        get CacheDirectorySymlink(): Promise<[string,string,number][]> /*a(sst)*/
        get CacheDirectoryMode(): Promise<number> /*u*/
        get CacheDirectory(): Promise<string[]> /*as*/
        get LogsDirectorySymlink(): Promise<[string,string,number][]> /*a(sst)*/
        get LogsDirectoryMode(): Promise<number> /*u*/
        get LogsDirectory(): Promise<string[]> /*as*/
        get ConfigurationDirectoryMode(): Promise<number> /*u*/
        get ConfigurationDirectory(): Promise<string[]> /*as*/
        get TimeoutCleanUSec(): Promise<number> /*t*/
        get MemoryDenyWriteExecute(): Promise<boolean> /*b*/
        get RestrictRealtime(): Promise<boolean> /*b*/
        get RestrictSUIDSGID(): Promise<boolean> /*b*/
        get RestrictNamespaces(): Promise<number> /*t*/
        get RestrictFileSystems(): Promise<[boolean,string[]]> /*(bas)*/
        get BindPaths(): Promise<[string,string,boolean,number][]> /*a(ssbt)*/
        get BindReadOnlyPaths(): Promise<[string,string,boolean,number][]> /*a(ssbt)*/
        get TemporaryFileSystem(): Promise<[string,string][]> /*a(ss)*/
        get MountAPIVFS(): Promise<boolean> /*b*/
        get KeyringMode(): Promise<string> /*s*/
        get ProtectProc(): Promise<string> /*s*/
        get ProcSubset(): Promise<string> /*s*/
        get ProtectHostname(): Promise<boolean> /*b*/
        get NetworkNamespacePath(): Promise<string> /*s*/
        get IPCNamespacePath(): Promise<string> /*s*/
        get KillMode(): Promise<string> /*s*/
        get KillSignal(): Promise<number> /*i*/
        get RestartKillSignal(): Promise<number> /*i*/
        get FinalKillSignal(): Promise<number> /*i*/
        get SendSIGKILL(): Promise<boolean> /*b*/
        get SendSIGHUP(): Promise<boolean> /*b*/
        get WatchdogSignal(): Promise<number> /*i*/
        GetProcesses(): Promise<[/*processes*/[string,number,string][]/*a(sus)*/]>
        AttachProcesses(subcgroup: string/*s*/, pids: number[]/*au*/): Promise<[]>
      }
      export interface Automount {
        get Where(): Promise<string> /*s*/
        get ExtraOptions(): Promise<string> /*s*/
        get DirectoryMode(): Promise<number> /*u*/
        get Result(): Promise<string> /*s*/
        get TimeoutIdleUSec(): Promise<number> /*t*/
      }
    }
    export namespace import1 {
      export interface Manager {
        on(ev: "TransferNew", cb: (transfer_id: number/*u*/, transfer_path: ObjectPath/*o*/) => void)
        on(ev: "TransferRemoved", cb: (transfer_id: number/*u*/, transfer_path: ObjectPath/*o*/, result: string/*s*/) => void)
        ImportTar(fd: any/*h*/, local_name: string/*s*/, force: boolean/*b*/, read_only: boolean/*b*/): Promise<[/*transfer_id*/number/*u*/, /*transfer_path*/ObjectPath/*o*/]>
        ImportRaw(fd: any/*h*/, local_name: string/*s*/, force: boolean/*b*/, read_only: boolean/*b*/): Promise<[/*transfer_id*/number/*u*/, /*transfer_path*/ObjectPath/*o*/]>
        ImportFileSystem(fd: any/*h*/, local_name: string/*s*/, force: boolean/*b*/, read_only: boolean/*b*/): Promise<[/*transfer_id*/number/*u*/, /*transfer_path*/ObjectPath/*o*/]>
        ExportTar(local_name: string/*s*/, fd: any/*h*/, format: string/*s*/): Promise<[/*transfer_id*/number/*u*/, /*transfer_path*/ObjectPath/*o*/]>
        ExportRaw(local_name: string/*s*/, fd: any/*h*/, format: string/*s*/): Promise<[/*transfer_id*/number/*u*/, /*transfer_path*/ObjectPath/*o*/]>
        PullTar(url: string/*s*/, local_name: string/*s*/, verify_mode: string/*s*/, force: boolean/*b*/): Promise<[/*transfer_id*/number/*u*/, /*transfer_path*/ObjectPath/*o*/]>
        PullRaw(url: string/*s*/, local_name: string/*s*/, verify_mode: string/*s*/, force: boolean/*b*/): Promise<[/*transfer_id*/number/*u*/, /*transfer_path*/ObjectPath/*o*/]>
        ListTransfers(): Promise<[/*transfers*/[number,string,string,string,number,ObjectPath][]/*a(usssdo)*/]>
        CancelTransfer(transfer_id: number/*u*/): Promise<[]>
      }
    }
    export namespace PolicyKit1 {
      export interface Authority {
        on(ev: "Changed", cb: () => void)
        get BackendName(): Promise<string> /*s*/
        get BackendVersion(): Promise<string> /*s*/
        get BackendFeatures(): Promise<number> /*u*/
        EnumerateActions(locale: string/*s*/): Promise<[/*action_descriptions*/[string,string,string,string,string,string,number,number,number,[string,string][]][]/*a(ssssssuuua{ss})*/]>
        CheckAuthorization(subject: [string,[string,[/*signature*/string,any]][]]/*(sa{sv})*/, action_id: string/*s*/, details: [string,string][]/*a{ss}*/, flags: number/*u*/, cancellation_id: string/*s*/): Promise<[/*result*/[boolean,boolean,[string,string][]]/*(bba{ss})*/]>
        CancelCheckAuthorization(cancellation_id: string/*s*/): Promise<[]>
        RegisterAuthenticationAgent(subject: [string,[string,[/*signature*/string,any]][]]/*(sa{sv})*/, locale: string/*s*/, object_path: string/*s*/): Promise<[]>
        RegisterAuthenticationAgentWithOptions(subject: [string,[string,[/*signature*/string,any]][]]/*(sa{sv})*/, locale: string/*s*/, object_path: string/*s*/, options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[]>
        UnregisterAuthenticationAgent(subject: [string,[string,[/*signature*/string,any]][]]/*(sa{sv})*/, object_path: string/*s*/): Promise<[]>
        AuthenticationAgentResponse(cookie: string/*s*/, identity: [string,[string,[/*signature*/string,any]][]]/*(sa{sv})*/): Promise<[]>
        AuthenticationAgentResponse2(uid: number/*u*/, cookie: string/*s*/, identity: [string,[string,[/*signature*/string,any]][]]/*(sa{sv})*/): Promise<[]>
        EnumerateTemporaryAuthorizations(subject: [string,[string,[/*signature*/string,any]][]]/*(sa{sv})*/): Promise<[/*temporary_authorizations*/[string,string,[string,[string,[Type[],any[]]][]],number,number][]/*a(ss(sa{sv})tt)*/]>
        RevokeTemporaryAuthorizations(subject: [string,[string,[/*signature*/string,any]][]]/*(sa{sv})*/): Promise<[]>
        RevokeTemporaryAuthorizationById(id: string/*s*/): Promise<[]>
      }
    }
    export namespace ratbag1 {
      export interface Manager {
        get APIVersion(): Promise<number> /*i*/
        get Devices(): Promise<ObjectPath[]> /*ao*/
      }
      export interface Led {
        get Index(): Promise<number> /*u*/
        get Modes(): Promise<number[]> /*au*/
        get Mode(): Promise<number> /*u*/
        set Mode(v: number /* Don't use: */|Promise<number>)
        get Color(): Promise<[number,number,number]> /*(uuu)*/
        set Color(v: [number,number,number] /* Don't use: */|Promise<[number,number,number]>)
        get ColorDepth(): Promise<number> /*u*/
        get EffectDuration(): Promise<number> /*u*/
        set EffectDuration(v: number /* Don't use: */|Promise<number>)
        get Brightness(): Promise<number> /*u*/
        set Brightness(v: number /* Don't use: */|Promise<number>)
      }
      export interface Button {
        get Index(): Promise<number> /*u*/
        get Mapping(): Promise<[number,[Type[],any[]]]> /*(uv)*/
        set Mapping(v: [number,[/*signature*/string,any]] /* Don't use: */|Promise<[number,[Type[],any[]]]>)
        get ActionTypes(): Promise<number[]> /*au*/
        Disable(): Promise<[number/*u*/]>
      }
      export interface Resolution {
        get Index(): Promise<number> /*u*/
        get IsActive(): Promise<boolean> /*b*/
        get IsDefault(): Promise<boolean> /*b*/
        get Resolution(): Promise<[Type[],any[]]> /*v*/
        set Resolution(v: [/*signature*/string,any] /* Don't use: */|Promise<[Type[],any[]]>)
        get Resolutions(): Promise<number[]> /*au*/
        SetActive(): Promise<[number/*u*/]>
        SetDefault(): Promise<[number/*u*/]>
      }
      export interface Profile {
        get Name(): Promise<string> /*s*/
        set Name(v: string /* Don't use: */|Promise<string>)
        get Enabled(): Promise<boolean> /*b*/
        set Enabled(v: boolean /* Don't use: */|Promise<boolean>)
        get Index(): Promise<number> /*u*/
        get Capabilities(): Promise<number[]> /*au*/
        get Resolutions(): Promise<ObjectPath[]> /*ao*/
        get Buttons(): Promise<ObjectPath[]> /*ao*/
        get Leds(): Promise<ObjectPath[]> /*ao*/
        get IsActive(): Promise<boolean> /*b*/
        get ReportRate(): Promise<number> /*u*/
        set ReportRate(v: number /* Don't use: */|Promise<number>)
        get ReportRates(): Promise<number[]> /*au*/
        SetActive(): Promise<[number/*u*/]>
      }
      export interface Device {
        on(ev: "Resync", cb: () => void)
        get Model(): Promise<string> /*s*/
        get Name(): Promise<string> /*s*/
        get Profiles(): Promise<ObjectPath[]> /*ao*/
        Commit(): Promise<[number/*u*/]>
      }
    }
    export interface hostname1 {
      get Hostname(): Promise<string> /*s*/
      get StaticHostname(): Promise<string> /*s*/
      get PrettyHostname(): Promise<string> /*s*/
      get DefaultHostname(): Promise<string> /*s*/
      get HostnameSource(): Promise<string> /*s*/
      get IconName(): Promise<string> /*s*/
      get Chassis(): Promise<string> /*s*/
      get Deployment(): Promise<string> /*s*/
      get Location(): Promise<string> /*s*/
      get KernelName(): Promise<string> /*s*/
      get KernelRelease(): Promise<string> /*s*/
      get KernelVersion(): Promise<string> /*s*/
      get OperatingSystemPrettyName(): Promise<string> /*s*/
      get OperatingSystemCPEName(): Promise<string> /*s*/
      get OperatingSystemSupportEnd(): Promise<number> /*t*/
      get HomeURL(): Promise<string> /*s*/
      get HardwareVendor(): Promise<string> /*s*/
      get HardwareModel(): Promise<string> /*s*/
      get FirmwareVersion(): Promise<string> /*s*/
      get FirmwareVendor(): Promise<string> /*s*/
      get FirmwareDate(): Promise<number> /*t*/
      SetHostname(hostname: string/*s*/, interactive: boolean/*b*/): Promise<[]>
      SetStaticHostname(hostname: string/*s*/, interactive: boolean/*b*/): Promise<[]>
      SetPrettyHostname(hostname: string/*s*/, interactive: boolean/*b*/): Promise<[]>
      SetIconName(icon: string/*s*/, interactive: boolean/*b*/): Promise<[]>
      SetChassis(chassis: string/*s*/, interactive: boolean/*b*/): Promise<[]>
      SetDeployment(deployment: string/*s*/, interactive: boolean/*b*/): Promise<[]>
      SetLocation(location: string/*s*/, interactive: boolean/*b*/): Promise<[]>
      GetProductUUID(interactive: boolean/*b*/): Promise<[/*uuid*/Buffer/*ay*/]>
      GetHardwareSerial(): Promise<[/*serial*/string/*s*/]>
      Describe(): Promise<[/*json*/string/*s*/]>
    }
    export interface UPower {
      on(ev: "DeviceAdded", cb: (device: ObjectPath/*o*/) => void)
      on(ev: "DeviceRemoved", cb: (device: ObjectPath/*o*/) => void)
      get DaemonVersion(): Promise<string> /*s*/
      get OnBattery(): Promise<boolean> /*b*/
      get LidIsClosed(): Promise<boolean> /*b*/
      get LidIsPresent(): Promise<boolean> /*b*/
      EnumerateDevices(): Promise<[/*devices*/ObjectPath[]/*ao*/]>
      GetDisplayDevice(): Promise<[/*device*/ObjectPath/*o*/]>
      GetCriticalAction(): Promise<[/*action*/string/*s*/]>
    }
    export namespace UPower {
      export interface Device {
        get NativePath(): Promise<string> /*s*/
        get Vendor(): Promise<string> /*s*/
        get Model(): Promise<string> /*s*/
        get Serial(): Promise<string> /*s*/
        get UpdateTime(): Promise<number> /*t*/
        get Type(): Promise<number> /*u*/
        get PowerSupply(): Promise<boolean> /*b*/
        get HasHistory(): Promise<boolean> /*b*/
        get HasStatistics(): Promise<boolean> /*b*/
        get Online(): Promise<boolean> /*b*/
        get Energy(): Promise<number> /*d*/
        get EnergyEmpty(): Promise<number> /*d*/
        get EnergyFull(): Promise<number> /*d*/
        get EnergyFullDesign(): Promise<number> /*d*/
        get EnergyRate(): Promise<number> /*d*/
        get Voltage(): Promise<number> /*d*/
        get ChargeCycles(): Promise<number> /*i*/
        get Luminosity(): Promise<number> /*d*/
        get TimeToEmpty(): Promise<number> /*x*/
        get TimeToFull(): Promise<number> /*x*/
        get Percentage(): Promise<number> /*d*/
        get Temperature(): Promise<number> /*d*/
        get IsPresent(): Promise<boolean> /*b*/
        get State(): Promise<number> /*u*/
        get IsRechargeable(): Promise<boolean> /*b*/
        get Capacity(): Promise<number> /*d*/
        get Technology(): Promise<number> /*u*/
        get WarningLevel(): Promise<number> /*u*/
        get BatteryLevel(): Promise<number> /*u*/
        get IconName(): Promise<string> /*s*/
        Refresh(): Promise<[]>
        GetHistory(type: string/*s*/, timespan: number/*u*/, resolution: number/*u*/): Promise<[/*data*/[number,number,number][]/*a(udu)*/]>
        GetStatistics(type: string/*s*/): Promise<[/*data*/[number,number][]/*a(dd)*/]>
      }
    }
    export namespace UDisks2 {
      export interface Manager {
        get Version(): Promise<string> /*s*/
        get SupportedFilesystems(): Promise<string[]> /*as*/
        get SupportedEncryptionTypes(): Promise<string[]> /*as*/
        get DefaultEncryptionType(): Promise<string> /*s*/
        CanFormat(type: string/*s*/): Promise<[/*available*/[boolean,string]/*(bs)*/]>
        CanResize(type: string/*s*/): Promise<[/*available*/[boolean,number,string]/*(bts)*/]>
        CanCheck(type: string/*s*/): Promise<[/*available*/[boolean,string]/*(bs)*/]>
        CanRepair(type: string/*s*/): Promise<[/*available*/[boolean,string]/*(bs)*/]>
        LoopSetup(fd: any/*h*/, options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[/*resulting_device*/ObjectPath/*o*/]>
        MDRaidCreate(blocks: ObjectPath[]/*ao*/, level: string/*s*/, name: string/*s*/, chunk: number/*t*/, options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[/*resulting_array*/ObjectPath/*o*/]>
        EnableModules(enable: boolean/*b*/): Promise<[]>
        EnableModule(name: string/*s*/, enable: boolean/*b*/): Promise<[]>
        GetBlockDevices(options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[/*block_objects*/ObjectPath[]/*ao*/]>
        ResolveDevice(devspec: [string,[/*signature*/string,any]][]/*a{sv}*/, options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[/*devices*/ObjectPath[]/*ao*/]>
      }
      export interface Drive {
        get Vendor(): Promise<string> /*s*/
        get Model(): Promise<string> /*s*/
        get Revision(): Promise<string> /*s*/
        get Serial(): Promise<string> /*s*/
        get WWN(): Promise<string> /*s*/
        get Id(): Promise<string> /*s*/
        get Configuration(): Promise<[string,[Type[],any[]]][]> /*a{sv}*/
        get Media(): Promise<string> /*s*/
        get MediaCompatibility(): Promise<string[]> /*as*/
        get MediaRemovable(): Promise<boolean> /*b*/
        get MediaAvailable(): Promise<boolean> /*b*/
        get MediaChangeDetected(): Promise<boolean> /*b*/
        get Size(): Promise<number> /*t*/
        get TimeDetected(): Promise<number> /*t*/
        get TimeMediaDetected(): Promise<number> /*t*/
        get Optical(): Promise<boolean> /*b*/
        get OpticalBlank(): Promise<boolean> /*b*/
        get OpticalNumTracks(): Promise<number> /*u*/
        get OpticalNumAudioTracks(): Promise<number> /*u*/
        get OpticalNumDataTracks(): Promise<number> /*u*/
        get OpticalNumSessions(): Promise<number> /*u*/
        get RotationRate(): Promise<number> /*i*/
        get ConnectionBus(): Promise<string> /*s*/
        get Seat(): Promise<string> /*s*/
        get Removable(): Promise<boolean> /*b*/
        get Ejectable(): Promise<boolean> /*b*/
        get SortKey(): Promise<string> /*s*/
        get CanPowerOff(): Promise<boolean> /*b*/
        get SiblingId(): Promise<string> /*s*/
        Eject(options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[]>
        SetConfiguration(value: [string,[/*signature*/string,any]][]/*a{sv}*/, options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[]>
        PowerOff(options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[]>
      }
      export interface Block {
        get Device(): Promise<Buffer> /*ay*/
        get PreferredDevice(): Promise<Buffer> /*ay*/
        get Symlinks(): Promise<Buffer[]> /*aay*/
        get DeviceNumber(): Promise<number> /*t*/
        get Id(): Promise<string> /*s*/
        get Size(): Promise<number> /*t*/
        get ReadOnly(): Promise<boolean> /*b*/
        get Drive(): Promise<ObjectPath> /*o*/
        get MDRaid(): Promise<ObjectPath> /*o*/
        get MDRaidMember(): Promise<ObjectPath> /*o*/
        get IdUsage(): Promise<string> /*s*/
        get IdType(): Promise<string> /*s*/
        get IdVersion(): Promise<string> /*s*/
        get IdLabel(): Promise<string> /*s*/
        get IdUUID(): Promise<string> /*s*/
        get Configuration(): Promise<[string,[string,[Type[],any[]]][]][]> /*a(sa{sv})*/
        get CryptoBackingDevice(): Promise<ObjectPath> /*o*/
        get HintPartitionable(): Promise<boolean> /*b*/
        get HintSystem(): Promise<boolean> /*b*/
        get HintIgnore(): Promise<boolean> /*b*/
        get HintAuto(): Promise<boolean> /*b*/
        get HintName(): Promise<string> /*s*/
        get HintIconName(): Promise<string> /*s*/
        get HintSymbolicIconName(): Promise<string> /*s*/
        get UserspaceMountOptions(): Promise<string[]> /*as*/
        AddConfigurationItem(item: [string,[string,[/*signature*/string,any]][]]/*(sa{sv})*/, options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[]>
        RemoveConfigurationItem(item: [string,[string,[/*signature*/string,any]][]]/*(sa{sv})*/, options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[]>
        UpdateConfigurationItem(old_item: [string,[string,[/*signature*/string,any]][]]/*(sa{sv})*/, new_item: [string,[string,[/*signature*/string,any]][]]/*(sa{sv})*/, options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[]>
        GetSecretConfiguration(options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[/*configuration*/[string,[string,[Type[],any[]]][]][]/*a(sa{sv})*/]>
        Format(type: string/*s*/, options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[]>
        OpenForBackup(options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[/*fd*/any/*h*/]>
        OpenForRestore(options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[/*fd*/any/*h*/]>
        OpenForBenchmark(options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[/*fd*/any/*h*/]>
        OpenDevice(mode: string/*s*/, options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[/*fd*/any/*h*/]>
        Rescan(options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[]>
      }
    }
    export namespace network1 {
      export interface Manager {
        get OperationalState(): Promise<string> /*s*/
        get CarrierState(): Promise<string> /*s*/
        get AddressState(): Promise<string> /*s*/
        get IPv4AddressState(): Promise<string> /*s*/
        get IPv6AddressState(): Promise<string> /*s*/
        get OnlineState(): Promise<string> /*s*/
        get NamespaceId(): Promise<number> /*t*/
        ListLinks(): Promise<[/*links*/[number,string,ObjectPath][]/*a(iso)*/]>
        GetLinkByName(name: string/*s*/): Promise<[/*ifindex*/number/*i*/, /*path*/ObjectPath/*o*/]>
        GetLinkByIndex(ifindex: number/*i*/): Promise<[/*name*/string/*s*/, /*path*/ObjectPath/*o*/]>
        SetLinkNTP(ifindex: number/*i*/, servers: string[]/*as*/): Promise<[]>
        SetLinkDNS(ifindex: number/*i*/, addresses: [number,Buffer][]/*a(iay)*/): Promise<[]>
        SetLinkDNSEx(ifindex: number/*i*/, addresses: [number,Buffer,number,string][]/*a(iayqs)*/): Promise<[]>
        SetLinkDomains(ifindex: number/*i*/, domains: [string,boolean][]/*a(sb)*/): Promise<[]>
        SetLinkDefaultRoute(ifindex: number/*i*/, enable: boolean/*b*/): Promise<[]>
        SetLinkLLMNR(ifindex: number/*i*/, mode: string/*s*/): Promise<[]>
        SetLinkMulticastDNS(ifindex: number/*i*/, mode: string/*s*/): Promise<[]>
        SetLinkDNSOverTLS(ifindex: number/*i*/, mode: string/*s*/): Promise<[]>
        SetLinkDNSSEC(ifindex: number/*i*/, mode: string/*s*/): Promise<[]>
        SetLinkDNSSECNegativeTrustAnchors(ifindex: number/*i*/, names: string[]/*as*/): Promise<[]>
        RevertLinkNTP(ifindex: number/*i*/): Promise<[]>
        RevertLinkDNS(ifindex: number/*i*/): Promise<[]>
        RenewLink(ifindex: number/*i*/): Promise<[]>
        ForceRenewLink(ifindex: number/*i*/): Promise<[]>
        ReconfigureLink(ifindex: number/*i*/): Promise<[]>
        Reload(): Promise<[]>
        DescribeLink(ifindex: number/*i*/): Promise<[/*json*/string/*s*/]>
        Describe(): Promise<[/*json*/string/*s*/]>
      }
      export interface Network {
        get Description(): Promise<string> /*s*/
        get SourcePath(): Promise<string> /*s*/
        get MatchMAC(): Promise<string[]> /*as*/
        get MatchPath(): Promise<string[]> /*as*/
        get MatchDriver(): Promise<string[]> /*as*/
        get MatchType(): Promise<string[]> /*as*/
        get MatchName(): Promise<string[]> /*as*/
      }
      export interface Link {
        get OperationalState(): Promise<string> /*s*/
        get CarrierState(): Promise<string> /*s*/
        get AddressState(): Promise<string> /*s*/
        get IPv4AddressState(): Promise<string> /*s*/
        get IPv6AddressState(): Promise<string> /*s*/
        get OnlineState(): Promise<string> /*s*/
        get AdministrativeState(): Promise<string> /*s*/
        get BitRates(): Promise<[number,number]> /*(tt)*/
        SetNTP(servers: string[]/*as*/): Promise<[]>
        SetDNS(addresses: [number,Buffer][]/*a(iay)*/): Promise<[]>
        SetDNSEx(addresses: [number,Buffer,number,string][]/*a(iayqs)*/): Promise<[]>
        SetDomains(domains: [string,boolean][]/*a(sb)*/): Promise<[]>
        SetDefaultRoute(enable: boolean/*b*/): Promise<[]>
        SetLLMNR(mode: string/*s*/): Promise<[]>
        SetMulticastDNS(mode: string/*s*/): Promise<[]>
        SetDNSOverTLS(mode: string/*s*/): Promise<[]>
        SetDNSSEC(mode: string/*s*/): Promise<[]>
        SetDNSSECNegativeTrustAnchors(names: string[]/*as*/): Promise<[]>
        RevertNTP(): Promise<[]>
        RevertDNS(): Promise<[]>
        Renew(): Promise<[]>
        ForceRenew(): Promise<[]>
        Reconfigure(): Promise<[]>
        Describe(): Promise<[/*json*/string/*s*/]>
      }
    }
    export namespace resolve1 {
      export interface Manager {
        get LLMNRHostname(): Promise<string> /*s*/
        get LLMNR(): Promise<string> /*s*/
        get MulticastDNS(): Promise<string> /*s*/
        get DNSOverTLS(): Promise<string> /*s*/
        get DNS(): Promise<[number,number,Buffer][]> /*a(iiay)*/
        get DNSEx(): Promise<[number,number,Buffer,number,string][]> /*a(iiayqs)*/
        get FallbackDNS(): Promise<[number,number,Buffer][]> /*a(iiay)*/
        get FallbackDNSEx(): Promise<[number,number,Buffer,number,string][]> /*a(iiayqs)*/
        get CurrentDNSServer(): Promise<[number,number,Buffer]> /*(iiay)*/
        get CurrentDNSServerEx(): Promise<[number,number,Buffer,number,string]> /*(iiayqs)*/
        get Domains(): Promise<[number,string,boolean][]> /*a(isb)*/
        get TransactionStatistics(): Promise<[number,number]> /*(tt)*/
        get CacheStatistics(): Promise<[number,number,number]> /*(ttt)*/
        get DNSSEC(): Promise<string> /*s*/
        get DNSSECStatistics(): Promise<[number,number,number,number]> /*(tttt)*/
        get DNSSECSupported(): Promise<boolean> /*b*/
        get DNSSECNegativeTrustAnchors(): Promise<string[]> /*as*/
        get DNSStubListener(): Promise<string> /*s*/
        get ResolvConfMode(): Promise<string> /*s*/
        ResolveHostname(ifindex: number/*i*/, name: string/*s*/, family: number/*i*/, flags: number/*t*/): Promise<[/*addresses*/[number,number,Buffer][]/*a(iiay)*/, /*canonical*/string/*s*/, /*flags*/number/*t*/]>
        ResolveAddress(ifindex: number/*i*/, family: number/*i*/, address: Buffer/*ay*/, flags: number/*t*/): Promise<[/*names*/[number,string][]/*a(is)*/, /*flags*/number/*t*/]>
        ResolveRecord(ifindex: number/*i*/, name: string/*s*/, cls: number/*q*/, type: number/*q*/, flags: number/*t*/): Promise<[/*records*/[number,number,number,Buffer][]/*a(iqqay)*/, /*flags*/number/*t*/]>
        ResolveService(ifindex: number/*i*/, name: string/*s*/, type: string/*s*/, domain: string/*s*/, family: number/*i*/, flags: number/*t*/): Promise<[/*srv_data*/[number,number,number,string,[number,number,Buffer][],string][]/*a(qqqsa(iiay)s)*/, /*txt_data*/Buffer[]/*aay*/, /*canonical_name*/string/*s*/, /*canonical_type*/string/*s*/, /*canonical_domain*/string/*s*/, /*flags*/number/*t*/]>
        GetLink(ifindex: number/*i*/): Promise<[/*path*/ObjectPath/*o*/]>
        SetLinkDNS(ifindex: number/*i*/, addresses: [number,Buffer][]/*a(iay)*/): Promise<[]>
        SetLinkDNSEx(ifindex: number/*i*/, addresses: [number,Buffer,number,string][]/*a(iayqs)*/): Promise<[]>
        SetLinkDomains(ifindex: number/*i*/, domains: [string,boolean][]/*a(sb)*/): Promise<[]>
        SetLinkDefaultRoute(ifindex: number/*i*/, enable: boolean/*b*/): Promise<[]>
        SetLinkLLMNR(ifindex: number/*i*/, mode: string/*s*/): Promise<[]>
        SetLinkMulticastDNS(ifindex: number/*i*/, mode: string/*s*/): Promise<[]>
        SetLinkDNSOverTLS(ifindex: number/*i*/, mode: string/*s*/): Promise<[]>
        SetLinkDNSSEC(ifindex: number/*i*/, mode: string/*s*/): Promise<[]>
        SetLinkDNSSECNegativeTrustAnchors(ifindex: number/*i*/, names: string[]/*as*/): Promise<[]>
        RevertLink(ifindex: number/*i*/): Promise<[]>
        RegisterService(name: string/*s*/, name_template: string/*s*/, type: string/*s*/, service_port: number/*q*/, service_priority: number/*q*/, service_weight: number/*q*/, txt_datas: [string,Buffer][][]/*aa{say}*/): Promise<[/*service_path*/ObjectPath/*o*/]>
        UnregisterService(service_path: ObjectPath/*o*/): Promise<[]>
        ResetStatistics(): Promise<[]>
        FlushCaches(): Promise<[]>
        ResetServerFeatures(): Promise<[]>
      }
      export interface Link {
        get ScopesMask(): Promise<number> /*t*/
        get DNS(): Promise<[number,Buffer][]> /*a(iay)*/
        get DNSEx(): Promise<[number,Buffer,number,string][]> /*a(iayqs)*/
        get CurrentDNSServer(): Promise<[number,Buffer]> /*(iay)*/
        get CurrentDNSServerEx(): Promise<[number,Buffer,number,string]> /*(iayqs)*/
        get Domains(): Promise<[string,boolean][]> /*a(sb)*/
        get DefaultRoute(): Promise<boolean> /*b*/
        get LLMNR(): Promise<string> /*s*/
        get MulticastDNS(): Promise<string> /*s*/
        get DNSOverTLS(): Promise<string> /*s*/
        get DNSSEC(): Promise<string> /*s*/
        get DNSSECNegativeTrustAnchors(): Promise<string[]> /*as*/
        get DNSSECSupported(): Promise<boolean> /*b*/
        SetDNS(addresses: [number,Buffer][]/*a(iay)*/): Promise<[]>
        SetDNSEx(addresses: [number,Buffer,number,string][]/*a(iayqs)*/): Promise<[]>
        SetDomains(domains: [string,boolean][]/*a(sb)*/): Promise<[]>
        SetDefaultRoute(enable: boolean/*b*/): Promise<[]>
        SetLLMNR(mode: string/*s*/): Promise<[]>
        SetMulticastDNS(mode: string/*s*/): Promise<[]>
        SetDNSOverTLS(mode: string/*s*/): Promise<[]>
        SetDNSSEC(mode: string/*s*/): Promise<[]>
        SetDNSSECNegativeTrustAnchors(names: string[]/*as*/): Promise<[]>
        Revert(): Promise<[]>
      }
    }
    export namespace bolt1 {
      export interface Manager {
        on(ev: "DeviceAdded", cb: (device: ObjectPath/*o*/) => void)
        on(ev: "DeviceRemoved", cb: (device: ObjectPath/*o*/) => void)
        on(ev: "DomainAdded", cb: (domain: ObjectPath/*o*/) => void)
        on(ev: "DomainRemoved", cb: (domain: ObjectPath/*o*/) => void)
        get Version(): Promise<number> /*u*/
        get Probing(): Promise<boolean> /*b*/
        get DefaultPolicy(): Promise<string> /*s*/
        get SecurityLevel(): Promise<string> /*s*/
        get AuthMode(): Promise<string> /*s*/
        set AuthMode(v: string /* Don't use: */|Promise<string>)
        get PowerState(): Promise<string> /*s*/
        get Generation(): Promise<number> /*u*/
        ListDomains(): Promise<[/*domains*/ObjectPath[]/*ao*/]>
        DomainById(id: string/*s*/): Promise<[/*domain*/ObjectPath/*o*/]>
        ListDevices(): Promise<[/*devices*/ObjectPath[]/*ao*/]>
        DeviceByUid(uid: string/*s*/): Promise<[/*device*/ObjectPath/*o*/]>
        EnrollDevice(uid: string/*s*/, policy: string/*s*/, flags: string/*s*/): Promise<[/*device*/ObjectPath/*o*/]>
        ForgetDevice(uid: string/*s*/): Promise<[]>
      }
      export interface Power {
        get Supported(): Promise<boolean> /*b*/
        get State(): Promise<string> /*s*/
        get Timeout(): Promise<number> /*u*/
        ForcePower(who: string/*s*/, flags: string/*s*/): Promise<[/*guard_fd*/any/*h*/]>
        ListGuards(): Promise<[/*guards*/[string,string,number][]/*a(ssu)*/]>
      }
    }
    export interface timedate1 {
      get Timezone(): Promise<string> /*s*/
      get LocalRTC(): Promise<boolean> /*b*/
      get CanNTP(): Promise<boolean> /*b*/
      get NTP(): Promise<boolean> /*b*/
      get NTPSynchronized(): Promise<boolean> /*b*/
      get TimeUSec(): Promise<number> /*t*/
      get RTCTimeUSec(): Promise<number> /*t*/
      SetTime(usec_utc: number/*x*/, relative: boolean/*b*/, interactive: boolean/*b*/): Promise<[]>
      SetTimezone(timezone: string/*s*/, interactive: boolean/*b*/): Promise<[]>
      SetLocalRTC(local_rtc: boolean/*b*/, fix_system: boolean/*b*/, interactive: boolean/*b*/): Promise<[]>
      SetNTP(use_ntp: boolean/*b*/, interactive: boolean/*b*/): Promise<[]>
      ListTimezones(): Promise<[/*timezones*/string[]/*as*/]>
    }
    export namespace portable1 {
      export interface Manager {
        get PoolPath(): Promise<string> /*s*/
        get PoolUsage(): Promise<number> /*t*/
        get PoolLimit(): Promise<number> /*t*/
        get Profiles(): Promise<string[]> /*as*/
        GetImage(image: string/*s*/): Promise<[/*object*/ObjectPath/*o*/]>
        ListImages(): Promise<[/*images*/[string,string,boolean,number,number,number,string,ObjectPath][]/*a(ssbtttso)*/]>
        GetImageOSRelease(image: string/*s*/): Promise<[/*os_release*/[string,string][]/*a{ss}*/]>
        GetImageMetadata(image: string/*s*/, matches: string[]/*as*/): Promise<[/*image*/string/*s*/, /*os_release*/Buffer/*ay*/, /*units*/[string,Buffer][]/*a{say}*/]>
        GetImageMetadataWithExtensions(image: string/*s*/, extensions: string[]/*as*/, matches: string[]/*as*/, flags: number/*t*/): Promise<[/*image*/string/*s*/, /*os_release*/Buffer/*ay*/, /*extensions*/[string,Buffer][]/*a{say}*/, /*units*/[string,Buffer][]/*a{say}*/]>
        GetImageState(image: string/*s*/): Promise<[/*state*/string/*s*/]>
        GetImageStateWithExtensions(image: string/*s*/, extensions: string[]/*as*/, flags: number/*t*/): Promise<[/*state*/string/*s*/]>
        AttachImage(image: string/*s*/, matches: string[]/*as*/, profile: string/*s*/, runtime: boolean/*b*/, copy_mode: string/*s*/): Promise<[/*changes*/[string,string,string][]/*a(sss)*/]>
        AttachImageWithExtensions(image: string/*s*/, extensions: string[]/*as*/, matches: string[]/*as*/, profile: string/*s*/, copy_mode: string/*s*/, flags: number/*t*/): Promise<[/*changes*/[string,string,string][]/*a(sss)*/]>
        DetachImage(image: string/*s*/, runtime: boolean/*b*/): Promise<[/*changes*/[string,string,string][]/*a(sss)*/]>
        DetachImageWithExtensions(image: string/*s*/, extensions: string[]/*as*/, flags: number/*t*/): Promise<[/*changes*/[string,string,string][]/*a(sss)*/]>
        ReattachImage(image: string/*s*/, matches: string[]/*as*/, profile: string/*s*/, runtime: boolean/*b*/, copy_mode: string/*s*/): Promise<[/*changes_removed*/[string,string,string][]/*a(sss)*/, /*changes_updated*/[string,string,string][]/*a(sss)*/]>
        ReattachImageWithExtensions(image: string/*s*/, extensions: string[]/*as*/, matches: string[]/*as*/, profile: string/*s*/, copy_mode: string/*s*/, flags: number/*t*/): Promise<[/*changes_removed*/[string,string,string][]/*a(sss)*/, /*changes_updated*/[string,string,string][]/*a(sss)*/]>
        RemoveImage(image: string/*s*/): Promise<[]>
        MarkImageReadOnly(image: string/*s*/, read_only: boolean/*b*/): Promise<[]>
        SetImageLimit(image: string/*s*/, limit: number/*t*/): Promise<[]>
        SetPoolLimit(limit: number/*t*/): Promise<[]>
      }
    }
    export interface Accounts {
      on(ev: "UserAdded", cb: (user: ObjectPath/*o*/) => void)
      on(ev: "UserDeleted", cb: (user: ObjectPath/*o*/) => void)
      get DaemonVersion(): Promise<string> /*s*/
      get HasNoUsers(): Promise<boolean> /*b*/
      get HasMultipleUsers(): Promise<boolean> /*b*/
      get AutomaticLoginUsers(): Promise<ObjectPath[]> /*ao*/
      ListCachedUsers(): Promise<[/*users*/ObjectPath[]/*ao*/]>
      FindUserById(id: number/*x*/): Promise<[/*user*/ObjectPath/*o*/]>
      FindUserByName(name: string/*s*/): Promise<[/*user*/ObjectPath/*o*/]>
      CreateUser(name: string/*s*/, fullname: string/*s*/, accountType: number/*i*/): Promise<[/*user*/ObjectPath/*o*/]>
      CacheUser(name: string/*s*/): Promise<[/*user*/ObjectPath/*o*/]>
      UncacheUser(name: string/*s*/): Promise<[]>
      DeleteUser(id: number/*x*/, removeFiles: boolean/*b*/): Promise<[]>
    }
    export namespace Accounts {
      export interface User {
        on(ev: "Changed", cb: () => void)
        get Uid(): Promise<number> /*t*/
        get UserName(): Promise<string> /*s*/
        get RealName(): Promise<string> /*s*/
        get AccountType(): Promise<number> /*i*/
        get HomeDirectory(): Promise<string> /*s*/
        get Shell(): Promise<string> /*s*/
        get Email(): Promise<string> /*s*/
        get Language(): Promise<string> /*s*/
        get Session(): Promise<string> /*s*/
        get SessionType(): Promise<string> /*s*/
        get XSession(): Promise<string> /*s*/
        get Location(): Promise<string> /*s*/
        get LoginFrequency(): Promise<number> /*t*/
        get LoginTime(): Promise<number> /*x*/
        get LoginHistory(): Promise<[number,number,[string,[Type[],any[]]][]][]> /*a(xxa{sv})*/
        get IconFile(): Promise<string> /*s*/
        get Saved(): Promise<boolean> /*b*/
        get Locked(): Promise<boolean> /*b*/
        get PasswordMode(): Promise<number> /*i*/
        get PasswordHint(): Promise<string> /*s*/
        get AutomaticLogin(): Promise<boolean> /*b*/
        get SystemAccount(): Promise<boolean> /*b*/
        get LocalAccount(): Promise<boolean> /*b*/
        SetUserName(name: string/*s*/): Promise<[]>
        SetRealName(name: string/*s*/): Promise<[]>
        SetEmail(email: string/*s*/): Promise<[]>
        SetLanguage(language: string/*s*/): Promise<[]>
        SetXSession(x_session: string/*s*/): Promise<[]>
        SetSession(session: string/*s*/): Promise<[]>
        SetSessionType(session_type: string/*s*/): Promise<[]>
        SetLocation(location: string/*s*/): Promise<[]>
        SetHomeDirectory(homedir: string/*s*/): Promise<[]>
        SetShell(shell: string/*s*/): Promise<[]>
        SetIconFile(filename: string/*s*/): Promise<[]>
        SetLocked(locked: boolean/*b*/): Promise<[]>
        SetAccountType(accountType: number/*i*/): Promise<[]>
        SetPasswordMode(mode: number/*i*/): Promise<[]>
        SetPassword(password: string/*s*/, hint: string/*s*/): Promise<[]>
        SetPasswordHint(hint: string/*s*/): Promise<[]>
        SetAutomaticLogin(enabled: boolean/*b*/): Promise<[]>
        GetPasswordExpirationPolicy(): Promise<[/*expiration_time*/number/*x*/, /*last_change_time*/number/*x*/, /*min_days_between_changes*/number/*x*/, /*max_days_between_changes*/number/*x*/, /*days_to_warn*/number/*x*/, /*days_after_expiration_until_lock*/number/*x*/]>
        SetPasswordExpirationPolicy(min_days_between_changes: number/*x*/, max_days_between_changes: number/*x*/, days_to_warn: number/*x*/, days_after_expiration_until_lock: number/*x*/): Promise<[]>
        SetUserExpirationPolicy(expiration_time: number/*x*/): Promise<[]>
      }
    }
    export interface RealtimeKit1 {
      get RTTimeUSecMax(): Promise<number> /*x*/
      get MaxRealtimePriority(): Promise<number> /*i*/
      get MinNiceLevel(): Promise<number> /*i*/
      MakeThreadRealtime(thread: number/*t*/, priority: number/*u*/): Promise<[]>
      MakeThreadRealtimeWithPID(process: number/*t*/, thread: number/*t*/, priority: number/*u*/): Promise<[]>
      MakeThreadHighPriority(thread: number/*t*/, priority: number/*i*/): Promise<[]>
      MakeThreadHighPriorityWithPID(process: number/*t*/, thread: number/*t*/, priority: number/*i*/): Promise<[]>
      ResetKnown(): Promise<[]>
      ResetAll(): Promise<[]>
      Exit(): Promise<[]>
    }
    export interface locale1 {
      get Locale(): Promise<string[]> /*as*/
      get X11Layout(): Promise<string> /*s*/
      get X11Model(): Promise<string> /*s*/
      get X11Variant(): Promise<string> /*s*/
      get X11Options(): Promise<string> /*s*/
      get VConsoleKeymap(): Promise<string> /*s*/
      get VConsoleKeymapToggle(): Promise<string> /*s*/
      SetLocale(locale: string[]/*as*/, interactive: boolean/*b*/): Promise<[]>
      SetVConsoleKeyboard(keymap: string/*s*/, keymap_toggle: string/*s*/, convert: boolean/*b*/, interactive: boolean/*b*/): Promise<[]>
      SetX11Keyboard(layout: string/*s*/, model: string/*s*/, variant: string/*s*/, options: string/*s*/, convert: boolean/*b*/, interactive: boolean/*b*/): Promise<[]>
    }
  }
  export namespace blueman {
    export interface Mechanism {
      DhcpClient(arg_0: string/*s*/): Promise<[/*arg_1*/string/*s*/]>
      EnableNetwork(arg_0: string/*s*/, arg_1: string/*s*/, arg_2: string/*s*/): Promise<[]>
      ReloadNetwork(): Promise<[]>
      DisableNetwork(): Promise<[]>
      PPPConnect(arg_0: number/*u*/, arg_1: string/*s*/, arg_2: string/*s*/): Promise<[/*arg_3*/string/*s*/]>
      SetRfkillState(arg_0: boolean/*b*/): Promise<[]>
      OpenRFCOMM(arg_0: number/*d*/): Promise<[]>
      CloseRFCOMM(arg_0: number/*d*/): Promise<[]>
    }
  }
  export namespace gnome {
    export interface Sysprof2 {
      PerfEventOpen(options: [string,[/*signature*/string,any]][]/*a{sv}*/, pid: number/*i*/, cpu: number/*i*/, flags: number/*t*/): Promise<[/*perf_stream_fd*/any/*h*/]>
      GetKernelSymbols(): Promise<[/*symbols*/[number,number,string][]/*a(tys)*/]>
    }
    export namespace GConf {
      export interface Defaults {
        on(ev: "SystemSet", cb: (v0: string[]/*as*/) => void)
        CanSetMandatory(includes: string[]/*as*/): Promise<[/*result*/number/*u*/]>
        UnsetMandatory(includes: string[]/*as*/, excludes: string[]/*as*/): Promise<[]>
        SetMandatoryValue(path: string/*s*/, value: string/*s*/): Promise<[]>
        SetMandatory(includes: string[]/*as*/, excludes: string[]/*as*/): Promise<[]>
        CanSetSystem(includes: string[]/*as*/): Promise<[/*result*/number/*u*/]>
        SetSystemValue(path: string/*s*/, value: string/*s*/): Promise<[]>
        SetSystem(includes: string[]/*as*/, excludes: string[]/*as*/): Promise<[]>
      }
    }
  }
  export namespace bluez {
    export interface AgentManager1 {
      RegisterAgent(agent: ObjectPath/*o*/, capability: string/*s*/): Promise<[]>
      UnregisterAgent(agent: ObjectPath/*o*/): Promise<[]>
      RequestDefaultAgent(agent: ObjectPath/*o*/): Promise<[]>
    }
    export interface ProfileManager1 {
      RegisterProfile(profile: ObjectPath/*o*/, UUID: string/*s*/, options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[]>
      UnregisterProfile(profile: ObjectPath/*o*/): Promise<[]>
    }
    export interface Adapter1 {
      get Address(): Promise<string> /*s*/
      get AddressType(): Promise<string> /*s*/
      get Name(): Promise<string> /*s*/
      get Alias(): Promise<string> /*s*/
      set Alias(v: string /* Don't use: */|Promise<string>)
      get Class(): Promise<number> /*u*/
      get Powered(): Promise<boolean> /*b*/
      set Powered(v: boolean /* Don't use: */|Promise<boolean>)
      get Discoverable(): Promise<boolean> /*b*/
      set Discoverable(v: boolean /* Don't use: */|Promise<boolean>)
      get DiscoverableTimeout(): Promise<number> /*u*/
      set DiscoverableTimeout(v: number /* Don't use: */|Promise<number>)
      get Pairable(): Promise<boolean> /*b*/
      set Pairable(v: boolean /* Don't use: */|Promise<boolean>)
      get PairableTimeout(): Promise<number> /*u*/
      set PairableTimeout(v: number /* Don't use: */|Promise<number>)
      get Discovering(): Promise<boolean> /*b*/
      get UUIDs(): Promise<string[]> /*as*/
      get Modalias(): Promise<string> /*s*/
      get Roles(): Promise<string[]> /*as*/
      get ExperimentalFeatures(): Promise<string[]> /*as*/
      StartDiscovery(): Promise<[]>
      SetDiscoveryFilter(properties: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[]>
      StopDiscovery(): Promise<[]>
      RemoveDevice(device: ObjectPath/*o*/): Promise<[]>
      GetDiscoveryFilters(): Promise<[/*filters*/string[]/*as*/]>
    }
    export interface GattManager1 {
      RegisterApplication(application: ObjectPath/*o*/, options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[]>
      UnregisterApplication(application: ObjectPath/*o*/): Promise<[]>
    }
    export interface Media1 {
      get SupportedUUIDs(): Promise<string[]> /*as*/
      RegisterEndpoint(endpoint: ObjectPath/*o*/, properties: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[]>
      UnregisterEndpoint(endpoint: ObjectPath/*o*/): Promise<[]>
      RegisterPlayer(player: ObjectPath/*o*/, properties: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[]>
      UnregisterPlayer(player: ObjectPath/*o*/): Promise<[]>
      RegisterApplication(application: ObjectPath/*o*/, options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[]>
      UnregisterApplication(application: ObjectPath/*o*/): Promise<[]>
    }
    export interface NetworkServer1 {
      Register(uuid: string/*s*/, bridge: string/*s*/): Promise<[]>
      Unregister(uuid: string/*s*/): Promise<[]>
    }
    export interface LEAdvertisingManager1 {
      get ActiveInstances(): Promise<number> /*y*/
      get SupportedInstances(): Promise<number> /*y*/
      get SupportedIncludes(): Promise<string[]> /*as*/
      get SupportedSecondaryChannels(): Promise<string[]> /*as*/
      RegisterAdvertisement(advertisement: ObjectPath/*o*/, options: [string,[/*signature*/string,any]][]/*a{sv}*/): Promise<[]>
      UnregisterAdvertisement(service: ObjectPath/*o*/): Promise<[]>
    }
    export interface Device1 {
      get Address(): Promise<string> /*s*/
      get AddressType(): Promise<string> /*s*/
      get Name(): Promise<string> /*s*/
      get Alias(): Promise<string> /*s*/
      set Alias(v: string /* Don't use: */|Promise<string>)
      get Class(): Promise<number> /*u*/
      get Appearance(): Promise<number> /*q*/
      get Icon(): Promise<string> /*s*/
      get Paired(): Promise<boolean> /*b*/
      get Bonded(): Promise<boolean> /*b*/
      get Trusted(): Promise<boolean> /*b*/
      set Trusted(v: boolean /* Don't use: */|Promise<boolean>)
      get Blocked(): Promise<boolean> /*b*/
      set Blocked(v: boolean /* Don't use: */|Promise<boolean>)
      get LegacyPairing(): Promise<boolean> /*b*/
      get RSSI(): Promise<number> /*n*/
      get Connected(): Promise<boolean> /*b*/
      get UUIDs(): Promise<string[]> /*as*/
      get Modalias(): Promise<string> /*s*/
      get Adapter(): Promise<ObjectPath> /*o*/
      get ManufacturerData(): Promise<[number,[Type[],any[]]][]> /*a{qv}*/
      get ServiceData(): Promise<[string,[Type[],any[]]][]> /*a{sv}*/
      get TxPower(): Promise<number> /*n*/
      get ServicesResolved(): Promise<boolean> /*b*/
      get WakeAllowed(): Promise<boolean> /*b*/
      set WakeAllowed(v: boolean /* Don't use: */|Promise<boolean>)
      Disconnect(): Promise<[]>
      Connect(): Promise<[]>
      ConnectProfile(UUID: string/*s*/): Promise<[]>
      DisconnectProfile(UUID: string/*s*/): Promise<[]>
      Pair(): Promise<[]>
      CancelPairing(): Promise<[]>
    }
    export interface Network1 {
      get Connected(): Promise<boolean> /*b*/
      get Interface(): Promise<string> /*s*/
      get UUID(): Promise<string> /*s*/
      Connect(uuid: string/*s*/): Promise<[/*interface*/string/*s*/]>
      Disconnect(): Promise<[]>
    }
    export interface MediaControl1 {
      get Connected(): Promise<boolean> /*b*/
      get Player(): Promise<ObjectPath> /*o*/
      Play(): Promise<[]>
      Pause(): Promise<[]>
      Stop(): Promise<[]>
      Next(): Promise<[]>
      Previous(): Promise<[]>
      VolumeUp(): Promise<[]>
      VolumeDown(): Promise<[]>
      FastForward(): Promise<[]>
      Rewind(): Promise<[]>
    }
  }
}
export namespace net {
  export namespace hadess {
    export interface PowerProfiles {
      on(ev: "ProfileReleased", cb: (cookie: number/*u*/) => void)
      get ActiveProfile(): Promise<string> /*s*/
      set ActiveProfile(v: string /* Don't use: */|Promise<string>)
      get PerformanceInhibited(): Promise<string> /*s*/
      get PerformanceDegraded(): Promise<string> /*s*/
      get Profiles(): Promise<[string,[Type[],any[]]][][]> /*aa{sv}*/
      get Actions(): Promise<string[]> /*as*/
      get ActiveProfileHolds(): Promise<[string,[Type[],any[]]][][]> /*aa{sv}*/
      HoldProfile(profile: string/*s*/, reason: string/*s*/, application_id: string/*s*/): Promise<[/*cookie*/number/*u*/]>
      ReleaseProfile(cookie: number/*u*/): Promise<[]>
    }
  }
}
export namespace com {
  export namespace endlessm {
    export namespace ParentalControls {
      export interface AccountInfo {
        get IsParent(): Promise<boolean> /*b*/
        set IsParent(v: boolean /* Don't use: */|Promise<boolean>)
      }
      export interface AppFilter {
        get AppFilter(): Promise<[boolean,string[]]> /*(bas)*/
        set AppFilter(v: [boolean,string[]] /* Don't use: */|Promise<[boolean,string[]]>)
        get OarsFilter(): Promise<[string,[string,string][]]> /*(sa{ss})*/
        set OarsFilter(v: [string,[string,string][]] /* Don't use: */|Promise<[string,[string,string][]]>)
        get AllowUserInstallation(): Promise<boolean> /*b*/
        set AllowUserInstallation(v: boolean /* Don't use: */|Promise<boolean>)
        get AllowSystemInstallation(): Promise<boolean> /*b*/
        set AllowSystemInstallation(v: boolean /* Don't use: */|Promise<boolean>)
      }
      export interface SessionLimits {
        get LimitType(): Promise<number> /*u*/
        set LimitType(v: number /* Don't use: */|Promise<number>)
        get DailySchedule(): Promise<[number,number]> /*(uu)*/
        set DailySchedule(v: [number,number] /* Don't use: */|Promise<[number,number]>)
      }
    }
  }
}
