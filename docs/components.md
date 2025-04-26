# Composants UI

Cette documentation présente les composants UI réutilisables de l'application Whisker Quest.

## Button

Le composant Button est utilisé pour créer des boutons interactifs.

### Props

- `type` (String) - Type du bouton (button, submit, reset)
- `variant` (String) - Variante de style (primary, secondary, tertiary, outline)
- `size` (String) - Taille du bouton (sm, md, lg)
- `disabled` (Boolean) - État désactivé
- `fullWidth` (Boolean) - Pleine largeur

### Exemple

```vue
<Button variant="primary" size="md">Cliquer ici</Button>
<Button variant="secondary" size="lg" fullWidth>Valider</Button>
```

## Card

Le composant Card est utilisé pour créer des conteneurs avec un style cohérent.

### Props

- `hover` (Boolean) - Effet de survol
- `padding` (String) - Espacement interne (none, sm, md, lg)

### Slots

- `default` - Contenu principal
- `header` - En-tête de la carte
- `footer` - Pied de la carte

### Exemple

```vue
<Card padding="md">
  <template #header>
    <h3>Titre</h3>
  </template>
  <p>Contenu de la carte</p>
  <template #footer>
    <Button>Action</Button>
  </template>
</Card>
```

## Input

Le composant Input est utilisé pour les champs de formulaire.

### Props

- `id` (String) - Identifiant unique
- `modelValue` (String|Number) - Valeur du champ
- `type` (String) - Type de champ (text, email, password, etc.)
- `label` (String) - Étiquette du champ
- `placeholder` (String) - Texte indicatif
- `required` (Boolean) - Champ obligatoire
- `disabled` (Boolean) - État désactivé
- `error` (String) - Message d'erreur
- `help` (String) - Texte d'aide
- `icon` (Boolean) - Afficher une icône

### Slots

- `icon` - Icône personnalisée

### Exemple

```vue
<Input
  id="email"
  v-model="email"
  type="email"
  label="Email"
  placeholder="votre@email.com"
  required
/>
```

## Alert

Le composant Alert est utilisé pour afficher des messages d'information.

### Props

- `variant` (String) - Type d'alerte (info, success, warning, error)
- `title` (String) - Titre de l'alerte

### Slots

- `default` - Contenu de l'alerte
- `icon` - Icône personnalisée

### Exemple

```vue
<Alert variant="success" title="Succès">
  L'opération a été effectuée avec succès.
</Alert>
```

## Badge

Le composant Badge est utilisé pour afficher des étiquettes.

### Props

- `variant` (String) - Variante de style (primary, secondary, tertiary, success, warning, error)
- `size` (String) - Taille du badge (sm, md, lg)

### Exemple

```vue
<Badge variant="primary" size="sm">Nouveau</Badge>
<Badge variant="success" size="md">Validé</Badge>
```

## Modal

Le composant Modal est utilisé pour afficher des fenêtres modales.

### Props

- `isOpen` (Boolean) - État d'ouverture
- `title` (String) - Titre de la modale
- `size` (String) - Taille de la modale (sm, md, lg, xl)

### Slots

- `default` - Contenu de la modale
- `footer` - Pied de la modale

### Exemple

```vue
<Modal :is-open="showModal" title="Confirmation" @close="showModal = false">
  <p>Êtes-vous sûr de vouloir continuer ?</p>
  <template #footer>
    <Button variant="secondary" @click="showModal = false">Annuler</Button>
    <Button variant="primary" @click="confirm">Confirmer</Button>
  </template>
</Modal>
```
