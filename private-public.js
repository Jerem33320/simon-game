/**
 * La fonction Engine contient plein de méthodes très compliquées, qui font
 * fonctionner le moteur correctement. L'idée est de conserver ces fonctions
 * à l'intérieur du moteur, de sorte que l'utilisateur ne casse pas le moteur en
 * les utilisant à mauvais escient.
 *
 * On expose donc seulement quelques méthodes, qui facilitent l'utilisation du
 * moteur sans avoir besoin de comprendre tout son fonctionnement.
 */
function Engine() {
  carburant = 100;

  function start() {
    allumerBougies();
    injecterCarburant();

    while (getCarburant() > 0) {
      bougerPistons();
    }

    if (getCarburant() === 0) {
      stop();
    }
  }

  function stop() {}

  function bougerPistons() {
    carburant--;
  }

  function allumerBougies() {
    // ... du code très compliqué
  }

  function injecterCarburant() {
    // ... du code très compliqué
  }

  /**
   * Getter.
   *
   * Cette fonction a pour seul but de permettre la lecture du carburant actuel
   * Il est impossible de modifier la variable carburant "de l'exterieur"
   */
  function getCarburant() {
    return carburant;
  }

  /**
   * On expose les méthodes publiques, c'est à dire celles que l'on peut utiliser
   * depuis l'exterieur de la fonction Engine.
   *
   * De cette manière, on s'assure que l'utilisateur ne fait pas n'importe quoi
   * avec le moteur (impossible de bouger les pistons à la main !)
   */
  return {
    tournerLaCléADroite: start,
    tournerLaCléAGauche: stop,
    getCarburant: getCarburant,

    /**
     * Setter.
     *
     * On controle ainsi comment est rempli le réservoir. Par exemple, on peut
     * ajouter une regle qui permet d'empécher le réservoir de déborder
     */
    remplirLeReservoir: function(essence) {
      carburant += essence;
    }
  };
}

// On crée une instance de moteur
const engine = new Engine();

// on le démarre
engine.tournerLacléADroite();

// savoir combien il reste d'essence
const currentLevel = engine.getCarburant();

// Essayer de changer le niveau de carburant directement
currentLevel = 2000; // ca ne marche pas, cela change simplement la variable currentLevel

// Pour faire le plein, il faut utiliser la méthode dédiée
engine.remplirLeReservoir(20); // ON ajoute 20 litres...

// Eteindre le moteur
engine.tournerLaCléAGauche();
